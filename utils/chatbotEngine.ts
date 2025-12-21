import { knowledgeBase, fallbackResponses } from '../data/chatbotKnowledge';

/**
 * Normalize text for comparison by converting to lowercase and removing extra spaces
 */
const normalizeText = (text: string): string => {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
};

/**
 * Calculate keyword match score for a given input against a knowledge item
 */
const calculateMatchScore = (input: string, keywords: string[]): number => {
  let score = 0;
  const normalizedInput = normalizeText(input);
  
  for (const keyword of keywords) {
    const normalizedKeyword = normalizeText(keyword);
    
    // Exact match - highest score
    if (normalizedInput === normalizedKeyword) {
      score += 100;
    }
    // Input contains the keyword
    else if (normalizedInput.includes(normalizedKeyword)) {
      score += 50;
    }
    // Keyword contains the input (partial match)
    else if (normalizedKeyword.includes(normalizedInput)) {
      score += 30;
    }
    // Check for individual word matches
    else {
      const inputWords = normalizedInput.split(' ');
      const keywordWords = normalizedKeyword.split(' ');
      
      for (const inputWord of inputWords) {
        if (inputWord.length > 2) { // Ignore very short words
          for (const keywordWord of keywordWords) {
            if (inputWord === keywordWord) {
              score += 20;
            } else if (inputWord.includes(keywordWord) || keywordWord.includes(inputWord)) {
              score += 10;
            }
          }
        }
      }
    }
  }
  
  return score;
};

/**
 * Find the best matching answer from the knowledge base
 */
export const findBestMatch = (userInput: string): string => {
  if (!userInput || userInput.trim().length === 0) {
    return "Please type a question or message, and I'll do my best to help you! 😊";
  }
  
  let bestMatch = { score: 0, answer: '' };
  
  // Check each knowledge item
  for (const item of knowledgeBase) {
    const score = calculateMatchScore(userInput, item.keywords);
    
    if (score > bestMatch.score) {
      bestMatch = { score, answer: item.answer };
    }
  }
  
  // If we have a decent match (score > 15), return it
  if (bestMatch.score > 15) {
    return bestMatch.answer;
  }
  
  // Otherwise, return a random fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};

/**
 * Simulate typing delay for more natural bot responses
 */
export const getTypingDelay = (message: string): number => {
  // Base delay + proportional to message length (simulate reading/typing time)
  const baseDelay = 500;
  const charDelay = message.length * 10;
  return Math.min(baseDelay + charDelay, 2000); // Cap at 2 seconds
};

/**
 * Get suggested questions based on category
 */
export const getSuggestedQuestions = (): string[] => {
  return [
    "What is SyZentric?",
    "Tell me about the TECH platform",
    "What courses does EDU offer?",
    "How can I contact you?",
    "What services do you provide?"
  ];
};

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Sparkles } from 'lucide-react';
import { findBestMatch, getTypingDelay } from '../utils/chatbotEngine';
import { greetingMessage, defaultSuggestedQuestions } from '../data/chatbotKnowledge';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>(defaultSuggestedQuestions.slice(0, 3));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '0',
        text: greetingMessage,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Handle click outside to minimize chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !isMinimized && chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        setIsMinimized(true);
      }
    };

    if (isOpen && !isMinimized) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Get bot response
    const { answer, suggestedQuestions: nextQuestions } = findBestMatch(inputValue);
    const delay = getTypingDelay(answer);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, delay));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: answer,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setSuggestedQuestions(nextQuestions);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    // Automatically send after a short delay
    setTimeout(() => {
      const input = inputRef.current;
      if (input) {
        handleSendMessage();
      }
    }, 100);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat"
        >
          <div className="relative">
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple rounded-full opacity-75 group-hover:opacity-100 animate-pulse"></div>
            
            {/* Button */}
            <div className="relative bg-gradient-to-r from-cyan to-purple p-4 rounded-full shadow-lg transform transition-transform duration-200 group-hover:scale-110">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            
            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-obsidian"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            isMinimized ? 'w-80' : 'w-96'
          } max-w-[calc(100vw-3rem)]`}
        >
          <div className="bg-white dark:bg-obsidian border-2 border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan to-purple p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">SyZentric AI Assistant</h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-obsidian/50 h-96">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-cyan to-purple text-white'
                            : 'bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-200'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                {suggestedQuestions.length > 0 && (
                  <div className="px-4 py-2 bg-white dark:bg-obsidian border-t border-gray-200 dark:border-white/10">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">You might also want to ask:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="text-xs px-3 py-1.5 rounded-full bg-cyan/10 dark:bg-cyan/5 border border-cyan/30 text-cyan hover:bg-cyan/20 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-obsidian border-t border-gray-200 dark:border-white/10">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-obsidian/50 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="p-2 rounded-lg bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

#!/bin/bash
# SyZentric EDU Quick Commands
# Run: bash commands.sh [command]

echo "🚀 SyZentric EDU - Quick Commands"
echo "=================================="

case "$1" in
  install)
    echo "📦 Installing dependencies..."
    npm install
    ;;
  dev)
    echo "🔧 Starting development server (port 3001)..."
    npm run dev
    ;;
  build)
    echo "🏗️  Building for production..."
    npm run build
    ;;
  preview)
    echo "👀 Previewing production build..."
    npm run preview
    ;;
  deploy-netlify)
    echo "🌐 Deploying to Netlify..."
    npm run build
    netlify deploy --prod --dir=dist
    ;;
  deploy-vercel)
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    ;;
  clean)
    echo "🧹 Cleaning build artifacts..."
    rm -rf dist node_modules
    npm install
    ;;
  *)
    echo "Available commands:"
    echo "  install         - Install dependencies"
    echo "  dev             - Start dev server"
    echo "  build           - Build for production"
    echo "  preview         - Preview production build"
    echo "  deploy-netlify  - Deploy to Netlify"
    echo "  deploy-vercel   - Deploy to Vercel"
    echo "  clean           - Clean and reinstall"
    echo ""
    echo "Usage: bash commands.sh [command]"
    ;;
esac


import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello there! I'm your AI emotional support companion. I'm here to listen and provide a safe space for you to share what's on your mind. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

const handleSendMessage = async () => {
  if (!inputMessage.trim()) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    content: inputMessage,
    sender: 'user',
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInputMessage('');
  setIsTyping(true);

  try {
    const response = await fetch("https://therapistai-ynj9.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_input: inputMessage })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: data.response || "Sorry, I couldn't understand that.",
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiResponse]);
  } catch (error) {
    const errorResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: "⚠️ Sorry, I'm having trouble connecting to the server.",
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, errorResponse]);
  } finally {
    setIsTyping(false);
  }
};


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const restartConversation = () => {
    setMessages([
      {
        id: '1',
        content: "Hello again! I'm here and ready to listen. What would you like to talk about today?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
    setInputMessage('');
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto h-[600px] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-therapy-blue-50 to-therapy-lavender-50 p-6 border-b border-therapy-warm-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-lg">AI</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Therapist AI</h3>
              <p className="text-sm text-gray-600">Your emotional support companion</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={restartConversation}
            className="hover:bg-therapy-blue-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart
          </Button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-therapy-blue-50/20 to-therapy-green-50/20">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="chat-bubble-ai">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">AI is typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-therapy-warm-gray-200">
        <div className="flex space-x-3">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind... I'm here to listen."
            className="flex-1 rounded-2xl border-therapy-warm-gray-200 focus:border-primary focus:ring-primary/20 text-base p-4"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="rounded-2xl px-6 bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          This AI provides emotional support but is not a substitute for professional therapy.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;

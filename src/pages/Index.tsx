
import React, { useRef } from 'react';
import { Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ChatInterface from '@/components/ChatInterface';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onStartChat={scrollToChat} />
      
      {/* Chat Section */}
      <section ref={chatRef} className="py-20 bg-gradient-to-b from-therapy-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Start Your Conversation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm here to listen without judgment. Share what's on your mind, and let's work through it together.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Therapist AI</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Compassionate AI-powered emotional support for your mental wellness journey.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-amber-800 font-medium mb-2">🔒 Privacy & Ethics</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Your conversations are private and not stored permanently. This AI provides emotional support 
                but cannot replace professional mental health care. If you're in crisis, please contact emergency 
                services or a mental health professional immediately.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Built with ❤️ for mental wellness • Not a substitute for professional therapy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

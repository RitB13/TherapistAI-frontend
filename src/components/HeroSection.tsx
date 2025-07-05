import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MessageCircle, Heart, Shield } from 'lucide-react';

interface HeroSectionProps {
  onStartChat: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartChat }) => {
  return (
    <section className="min-h-screen therapy-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-therapy-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gentle-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-therapy-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-therapy-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main heading */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-primary mr-3 animate-gentle-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                Therapist
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI</span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
              Your AI-Powered Emotional Support Companion
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              ✨ Talk. Vent. Heal. Privately.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A calm and safe space where you can express your thoughts, fears, and emotions. 
              Powered by advanced AI trained on mental wellness patterns, I listen and respond with genuine care.
            </p>
          </div>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <MessageCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-gray-700 font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Shield className="w-5 h-5 text-secondary mr-2" />
              <span className="text-gray-700 font-medium">Completely Private</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Heart className="w-5 h-5 text-accent mr-2" />
              <span className="text-gray-700 font-medium">Non-Judgmental</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <Button 
              onClick={onStartChat}
              size="lg"
              className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Conversation
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Free to use • No sign-up required • Your privacy protected
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Heart, Brain, Lock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Emotionally Intelligent",
      description: "Advanced AI trained on mental wellness patterns to provide empathetic, caring responses to your emotional needs."
    },
    {
      icon: Brain,
      title: "AI-Powered Support",
      description: "Built with state-of-the-art language models to understand and respond to complex emotional situations with nuance."
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your conversations are confidential. We prioritize your privacy and emotional safety above everything else."
    },
    {
      icon: Shield,
      title: "Always Available",
      description: "24/7 emotional support when you need it most. No appointments, no waiting - just immediate care and understanding."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-therapy-green-50 to-therapy-lavender-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Therapist AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Therapist AI is built on modern AI technology integrated with evidence-based mental wellness knowledge 
            to bring you comforting, intelligent responses to emotional concerns. Created as a compassionate first step 
            toward better emotional wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-therapy-warm-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural, emotionally intelligent conversations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Powered by advanced language models trained on mental wellness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Evidence-informed responses for anxiety, stress, and emotional distress
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Grounding techniques and coping strategies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Safe space to express thoughts and emotions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Immediate emotional support when you need it
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
              <p className="text-amber-700 leading-relaxed">
                <strong>Therapist AI is not a licensed mental health professional.</strong> It cannot diagnose, treat, or prescribe medication. 
                This AI is designed to provide emotional support and coping strategies, but it is not a substitute for professional therapy or medical care. 
                If you're experiencing severe depression, anxiety, or thoughts of self-harm, please consult a certified therapist, counselor, 
                or contact a mental health crisis line immediately.
              </p>
              <p className="text-amber-700 mt-3 text-sm">
                🚨 <strong>Crisis Resources:</strong> National Suicide Prevention Lifeline: 988 | Crisis Text Line: Text HOME to 741741
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

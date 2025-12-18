import React from 'react';
import { Button } from './Button';
import { MessageSquare, Calendar } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image - Soft Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
          alt="Abstract Gradient"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-brand-50/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Start with a free first ticket (1-2hr limit).</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Start with a free initial ticket to validate fit, response quality, and working style. Designed to resolve specific, isolated issues (limit 1-2h), not structural overhauls.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="shadow-lg shadow-brand-200">
            <MessageSquare className="mr-2 h-5 w-5" />
            Start a chat
          </Button>
          <Button variant="white" size="lg" className="text-slate-600 border border-slate-200">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a discovery call
          </Button>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Typically replies in under 5 minutes during business hours.
        </p>
      </div>
    </section>
  );
};
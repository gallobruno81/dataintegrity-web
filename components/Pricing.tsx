import React from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, MessageSquare, Phone, FileText, X } from 'lucide-react';

const PriceCard: React.FC<{
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
}> = ({ title, price, subtitle, description, features, isPrimary }) => (
  <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${isPrimary ? 'bg-white border-brand-200 shadow-xl shadow-brand-500/10 scale-105 z-10' : 'bg-white border-slate-100 shadow-lg shadow-slate-200/50 hover:border-slate-300'} h-full`}>
    {isPrimary && (
      <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
        Most Popular
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <div className="flex items-baseline mb-2">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        {subtitle && <span className="text-slate-500 ml-2 font-medium">{subtitle}</span>}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>

    <div className="flex-1">
      <ul className="space-y-4 mb-8">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-700">
            <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${isPrimary ? 'text-brand-600' : 'text-slate-400'}`} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pricing & Engagement</h2>
          <p className="text-lg text-slate-600">
            We believe in transparent pricing and flexible engagement. Our goal is to provide clarity upfront while keeping enough room to adapt to real production needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <PriceCard
            isPrimary={true}
            title="Monthly Support"
            price="USD 350"
            subtitle="/ month"
            description="Designed for teams running live NSPB and NetSuite environments who need reliable, ongoing support."
            features={[
              "Priority chat access with fast response times",
              "First support ticket free (1-2h for non-critical)",
              "Initial analysis without the clock running",
              "Short calls included to accelerate resolution",
              "Ongoing context and system familiarity",
              "Core support and controlled logic corrections"
            ]}
          />
          <PriceCard
            title="Hourly Execution"
            price="USD 125"
            subtitle="/ hour"
            description="For work that requires hands-on execution beyond day-to-day support."
            features={[
              "Available for clients with an active monthly plan",
              "Billed only for actual execution work",
              "Larger logic enhancements",
              "Structural model changes",
              "Prepaid hour bundles available",
              "Execution work is available after an Initial Data Integrity Tuning or within an active monthly support engagement"
            ]}
          />
        </div>

        {/* No Surprises Banner */}
        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="bg-brand-100 p-3 rounded-full mr-4">
                <ShieldCheck className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">No Surprises</h3>
                <p className="text-slate-600">We value long-term trust over short-term billing.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium text-slate-700">
              <span className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> No long-term lock-ins</span>
              <span className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> No hidden fees</span>
              <span className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Full transparency</span>
            </div>
          </div>
        </div>

        {/* Good Fit / Not a Fit Filtering */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
            <h4 className="text-lg font-bold text-green-800 mb-4">This is a good fit if:</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>You operate a live NSPB or NetSuite environment</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>You need senior-level answers without ticket queues</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>You value understanding root cause, not just fixes</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <h4 className="text-lg font-bold text-red-800 mb-4">Not a fit if:</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>You are looking for a full system re-implementation</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>You expect large delivery teams or long-term consulting contracts</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>You want broad transformations without scoped analysis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Get Started */}
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-900 text-center mb-10">How to Get Started</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Path 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Have an issue right now?</h4>
              <p className="text-sm text-slate-600 mb-6 min-h-[40px]">
                Your first ticket is free. We'll respond quickly and propose the fastest resolution.
              </p>
              <Button fullWidth onClick={() => window.location.href = '#contact'}>Start a Chat</Button>
            </div>

            {/* Path 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Evaluating options?</h4>
              <p className="text-sm text-slate-600 mb-6 min-h-[40px]">
                We'll review your setup, understand your needs, and recommend the right model.
              </p>
              <Button variant="outline" fullWidth onClick={() => window.location.href = '#contact'}>Schedule Discovery Call</Button>
            </div>

            {/* Path 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Just need pricing details?</h4>
              <p className="text-sm text-slate-600 mb-6 min-h-[40px]">
                Share a few details and we'll follow up with a clear proposal for your team.
              </p>
              <Button variant="outline" fullWidth onClick={() => window.location.href = '#contact'}>Request Pricing Info</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
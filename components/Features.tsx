import React from 'react';
import { MessageSquare, Zap, Gift, Video, BarChart3, Eye } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; className?: string }> = ({ icon, title, desc, className }) => (
  <div className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 ${className}`}>
    <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm border border-slate-100 group-hover:bg-brand-50 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Support designed for efficiency.</h2>
          <p className="text-xl text-slate-600">
            We operate as an extension of your team. No ticket queues, no generic responses, just direct access to senior consultants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Spans 2 cols on LG */}
          <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-10 relative overflow-hidden text-white flex flex-col justify-between min-h-[300px]">
            <div className="relative z-10">
              <div className="bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center text-brand-400 mb-6 border border-slate-700">
                <MessageSquare />
              </div>
              <h3 className="text-2xl font-bold mb-3">Chat-First Model</h3>
              <p className="text-slate-400 text-lg max-w-md">Immediate access to a senior consultant. Context-aware conversations, not generic automated responses.</p>
            </div>
            {/* Abstract Decor */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-brand-600/20 to-transparent rounded-tl-[100px] pointer-events-none"></div>
          </div>

          <FeatureCard
            icon={<Zap />}
            title="Fast SLA"
            desc="First response typically within minutes. Urgent production issues are prioritized immediately."
            className="lg:col-span-1"
          />

          <FeatureCard
            icon={<Gift />}
            title="First Ticket Free"
            desc="Start with a free initial ticket to validate fit and response quality. Designed to resolve specific, isolated issues (limit 1-2h), not structural overhauls."
            className="lg:col-span-1"
          />

          {/* Card 4: Spans 2 cols on LG */}
          <div className="lg:col-span-2 bg-brand-50 rounded-3xl p-10 border border-brand-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                <Video />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">On-Demand Calls</h3>
              <p className="text-slate-600 text-lg max-w-xl">When a live conversation is faster, we jump on a screen-share call within minutes. We solve the problem together.</p>
            </div>
          </div>

        </div>

        {/* Detailed Operational Subsections */}
        <div className="grid md:grid-cols-2 gap-12 pt-10 border-t border-slate-100">
          {/* Ticket Priorities */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-50 text-brand-600 rounded-lg mr-3">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Ticket Priorities & Response Model</h3>
            </div>
            <p className="text-slate-600 mb-6">
              All support requests are handled using a clear priority model so expectations are explicit from the start.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-20 flex-shrink-0 font-bold text-sm text-slate-400 mt-1">LOW</span>
                <span className="text-slate-600">Non-urgent questions, validations, or clarifications that do not impact active cycles.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-20 flex-shrink-0 font-bold text-sm text-yellow-500 mt-1">MEDIUM</span>
                <span className="text-slate-600">Issues affecting planning accuracy, reports, or upcoming deadlines.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-20 flex-shrink-0 font-bold text-sm text-red-500 mt-1">HIGH</span>
                <span className="text-slate-600">Active close-cycle blockers, production errors, or data inconsistencies impacting decisions.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-500 italic">
              Priority is agreed at ticket creation and can be adjusted if context changes. Urgent production issues are always handled first. Free tickets are handled with Medium priority, unless it's a critical production issue.
            </p>
          </div>

          {/* Real-Time Visibility */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg mr-3">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Real-Time Ticket Visibility</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Clients always know the status of their requests. There are no hidden queues or generic handoffs.
            </p>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Each ticket clearly shows:</h4>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mr-3"></div>
                  Current status (Open / In Progress / Waiting / Resolved)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mr-3"></div>
                  Whether a senior consultant is actively working on it
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mr-3"></div>
                  When the last update occurred
                </li>
              </ul>
            </div>
            <p className="mt-6 text-slate-600">
              If a ticket is being worked on, you can see it. This reinforces transparency and trust.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
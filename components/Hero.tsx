import React, { useState, useEffect } from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, Video, FileText, ExternalLink } from 'lucide-react';
import { Button } from './Button';

// Simple Typing Indicator Component
const TypingIndicator = () => (
  <div className="flex space-x-1.5 p-1">
    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
  </div>
);

// Define the scenarios for the dynamic chat
const SCENARIOS = [
  {
    id: 1,
    type: 'code',
    userInitial: 'FP',
    userColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    userMsg: "My Workforce calc script is failing on the 'New Hires' block after the last metadata update. Can you check?",
    agentMsg: "I see the issue. The new hierarchy member needs to be set to 'Dynamic Calc' or explicit in the fix statement. Here is the fix:",
    agentContent: (
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 font-mono text-xs leading-6 overflow-hidden shadow-inner mt-3">
        <div className="text-slate-400">FIX ("New Hires", @Relative("Total Geography", 0))</div>
        <div className="pl-4 text-purple-300">@CALCMODE(BOTTOMUP);</div>
        <div className="pl-4 text-blue-300">"Basic Salary" = "Headcount" * "Avg Rate";</div>
        <div className="text-slate-400">ENDFIX</div>
      </div>
    )
  },
  {
    id: 2,
    type: 'call',
    userInitial: 'CFO',
    userColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    userMsg: "I'm looking at the Consolidation numbers for UK and there is a variance I can't trace. It's urgent.",
    agentMsg: "I'm looking at the logs now. It looks like a currency rate override. It's easier if I show you.",
    agentContent: (
      <div className="mt-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full text-green-600">
            <Video size={20} />
          </div>
          <div>
            <div className="font-semibold text-slate-800 text-sm">Instant Screen Share</div>
            <div className="text-xs text-slate-500">Ready to join</div>
          </div>
        </div>
        <button className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-brand-700 transition-colors">
          Join Call
        </button>
      </div>
    )
  },
  {
    id: 3,
    type: 'link',
    userInitial: 'IT',
    userColor: 'bg-purple-100 text-purple-700 border-purple-200',
    userMsg: "Do we have a document on how to add a new Cost Center for the 2025 budget cycle?",
    agentMsg: "Yes, we documented that last month. Here is the specific KB article for your admin team:",
    agentContent: (
      <div className="mt-3 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-3 hover:bg-slate-100 transition-colors cursor-pointer group">
        <div className="bg-white p-2 rounded-lg border border-slate-200 text-brand-600 group-hover:border-brand-200">
          <FileText size={20} />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-brand-700 text-sm flex items-center">
            KB-204: Managing Dimensions
            <ExternalLink size={12} className="ml-1 opacity-50" />
          </div>
          <div className="text-xs text-slate-500 mt-1">Updated 2 weeks ago • Internal Wiki</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    type: 'quick',
    userInitial: 'JS',
    userColor: 'bg-orange-100 text-orange-700 border-orange-200',
    userMsg: "Did the Data Management load for Oct-24 Actuals finish running?",
    agentMsg: "Yes, checked the process log. It completed successfully at 8:15 AM. You are good to run reports.",
    agentContent: null // Just text
  }
];

export const Hero: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [animState, setAnimState] = useState<'initial' | 'typing' | 'done'>('initial');

  // Handle Scenario Lifecycle & Animation
  useEffect(() => {
    // 1. Reset animation state immediately when scenario changes
    setAnimState('initial');

    // 2. Start Typing Animation (after 600ms)
    const typingTimer = setTimeout(() => {
      setAnimState('typing');
    }, 600);

    // 3. Show Final Response (after 2000ms total)
    const responseTimer = setTimeout(() => {
      setAnimState('done');
    }, 2000);

    // 4. Auto-Advance to next scenario (after 8000ms)
    const nextScenarioTimer = setTimeout(() => {
      setActiveScenario((prev) => (prev + 1) % SCENARIOS.length);
    }, 8000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(responseTimer);
      clearTimeout(nextScenarioTimer);
    };
  }, [activeScenario]);

  const current = SCENARIOS[activeScenario];

  return (
    <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Real Image Background (Simulating Nano Banana Style) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Abstract Data Integrity Background"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Soft Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-blue-100/50 text-brand-700 text-sm font-semibold mb-8 shadow-sm backdrop-blur-xl hover:scale-105 transition-transform origin-left cursor-default">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 mr-3 animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
              Now accepting new clients for Q4
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Oracle NSPB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Support built for speed.</span>
            </h1>

            <div className="mb-10 space-y-6 animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                Stop waiting for tickets. Chat directly with senior experts who understand Finance, NSPB, and NetSuite.
              </p>
              <p className="text-base text-slate-500 max-w-lg leading-relaxed">
                Designed for teams running live NSPB and NetSuite environments who value reliability over long-term consulting contracts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-4 shadow-xl shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/30 transition-all duration-300" onClick={() => window.location.href = '#contact'}>
                Start a Chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="white" size="lg" className="border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/80 backdrop-blur-sm" onClick={() => window.location.href = '#how-it-works'}>
                How it Works
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-600 mr-2" />
                <span>First ticket free (1-2hr limit*)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-600 mr-2" />
                <span>Response in &lt; 5m</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-600 mr-2" />
                <span>No lock-in contracts</span>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Chat UI Representation */}
          <div className="relative hidden lg:block">
            {/* Main Chat Card */}
            <div className="relative z-20 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden min-h-[480px] flex flex-col">

              {/* Window Header */}
              <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">DataIntegrity Console</div>
              </div>

              {/* Interactive Progress Indicator */}
              <div className="flex gap-1 px-6 pt-4">
                {SCENARIOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScenario(idx)}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-500 hover:h-2 ${idx === activeScenario ? 'bg-brand-500' : 'bg-slate-200 hover:bg-slate-300'}`}
                    aria-label={`Go to scenario ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Chat Body - Dynamic Content */}
              <div className="p-8 space-y-8 font-sans flex-1">

                {/* User Message - Always Visible for current scenario */}
                <div key={`user-${current.id}`} className="flex items-start gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border ${current.userColor}`}>
                    {current.userInitial}
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-50 rounded-2xl rounded-tl-none p-5 text-slate-700 text-base shadow-sm border border-slate-200 leading-relaxed">
                      <p>{current.userMsg}</p>
                    </div>
                  </div>
                </div>

                {/* Agent Reply - Animates based on state */}
                {animState !== 'initial' && (
                  <div className="flex items-start gap-5 flex-row-reverse animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-500/30">
                      <MessageSquare size={18} />
                    </div>
                    <div className="space-y-3 max-w-lg w-full">
                      <div className="bg-brand-50/80 rounded-2xl rounded-tr-none p-6 text-slate-800 text-base shadow-sm border border-brand-100 leading-relaxed min-h-[80px]">

                        {/* Show Typing Indicator OR Final Content */}
                        {animState === 'typing' ? (
                          <div className="flex items-center h-full">
                            <TypingIndicator />
                          </div>
                        ) : (
                          <div className="animate-in fade-in duration-300">
                            <p className="mb-2">{current.agentMsg}</p>
                            {current.agentContent}
                          </div>
                        )}

                      </div>
                      {animState === 'done' && (
                        <div className="text-xs text-slate-500 text-right pr-2 font-medium animate-in fade-in duration-500">
                          Senior Consultant • Just now
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Decorative Elements behind - subtle depth */}
            <div className="absolute -top-12 -right-12 w-full h-full bg-gradient-to-br from-blue-100/40 to-transparent rounded-[3rem] -z-10 blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
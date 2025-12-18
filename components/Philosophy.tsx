import React from 'react';
import { ShieldCheck, FileSearch, Settings2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-32 overflow-hidden">
      {/* Background - Pure Dark for Contrast */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Philosophy</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">Fixing Existing Logic Errors is Part of Support</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We don't artificially separate "support" from "fixing the system" when it's behaving incorrectly. If a live system is not performing its intended or expected behavior, correcting that logic error is part of our Managed Support. Implementing new logic, adding new features, or changing core functional behavior are scoped separately.
          </p>
          <p className="text-lg text-slate-400 mb-16 border-l-4 border-brand-500 pl-6 py-2">
            Experience supporting complex NSPB environments with Workforce, FX, multi-entity structures, and tight close cycles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-brand-500/50 transition-all hover:-translate-y-1 shadow-2xl group">
            <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:bg-slate-700 transition-colors">
              <FileSearch className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Analyze First</h3>
            <p className="text-slate-400 leading-relaxed">
              We analyze before changing anything. We explain the issue and options clearly in business terms.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-brand-500/50 transition-all hover:-translate-y-1 shadow-2xl group">
            <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:bg-slate-700 transition-colors">
              <Settings2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Targeted Changes</h3>
            <p className="text-slate-400 leading-relaxed">
              We apply targeted, controlled changes. We don't do massive overhauls without clear scope.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-brand-500/50 transition-all hover:-translate-y-1 shadow-2xl group">
            <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:bg-slate-700 transition-colors">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">No Surprises</h3>
            <p className="text-slate-400 leading-relaxed">
              We document what changed and why. When work becomes larger or structural, we clearly define scope upfront.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
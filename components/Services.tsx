import React from 'react';
import { Check, ArrowRightLeft, Shield, Activity, CalendarClock, Layers, Database, Search } from 'lucide-react';
import { Button } from './Button';

const ServiceList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-slate-700 text-base font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

const OperationalCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; items: string[] }> = ({ title, desc, icon, items }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-slate-50 rounded-2xl text-brand-600 mr-4 border border-slate-100">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
    </div>
    <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-sm text-slate-600">
          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Image - Light Fluid Abstract */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/services-bg.png`}
          alt="Abstract Technical Grid Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-50/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION 1: CORE SUPPORT */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-4 tracking-wide uppercase border border-brand-100 shadow-sm backdrop-blur-sm">
              Included with Monthly Fee
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Core Support Services</h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We support day-to-day usage of Oracle NetSuite Planning & Budgeting (NSPB) and NetSuite Finance.
              Logic corrections are included when needed to restore behavior.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* NSPB Card */}
            <div id="nspb" className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative group hover:border-brand-200 transition-colors duration-300">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mr-5 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <Layers size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Oracle NSPB & EPM</h3>
                  <p className="text-slate-500 text-sm font-medium">Planning, Workforce, Financials</p>
                </div>
              </div>

              {/* Visual Abstract: Code Snippet */}
              <div className="mb-10 bg-[#0f172a] rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 shadow-inner group-hover:shadow-2xl transition-all duration-500">
                <div className="flex gap-1.5 mb-3 border-b border-slate-800 pb-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
                <div className="opacity-90"><span className="text-purple-400">FIX</span>(@Relative("Total Entity", 0))</div>
                <div className="pl-4 opacity-90"><span className="text-yellow-400">"OFS_Calculated"</span> = <span className="text-yellow-400">"OFS_Input"</span> * 1.05;</div>
                <div className="pl-4"><span className="text-slate-500 italic">// Logic corrections included</span></div>
                <div className="opacity-90"><span className="text-purple-400">ENDFIX</span></div>
              </div>

              <ServiceList items={[
                "Investigation and resolution of calculation issues",
                "Targeted corrections to rules and formulas",
                "Workforce logic (salaries, headcount, proration)",
                "Smart View stability & performance tuning",
                "Forms, validations, and usability improvements",
                "Support for ARCS & FCC logic"
              ]} />
            </div>

            {/* NetSuite Card */}
            <div id="netsuite" className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative group hover:border-brand-200 transition-colors duration-300">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mr-5 border border-indigo-100">
                  <Database size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">NetSuite Integration & Data Support</h3>
                  <p className="text-slate-500 text-sm font-medium">Finance, Reporting, Data</p>
                </div>
              </div>

              {/* Visual Abstract: Data Table */}
              <div className="mb-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden text-xs">
                <div className="grid grid-cols-3 bg-slate-100/80 p-3 font-semibold text-slate-600 border-b border-slate-200">
                  <div>Type</div>
                  <div>Account</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-3 p-3 border-b border-slate-100 text-slate-500 bg-white">
                  <div>Saved Search</div>
                  <div>4001 Sales</div>
                  <div className="text-green-600 font-medium flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>Validated</div>
                </div>
                <div className="grid grid-cols-3 p-3 text-slate-500 bg-white">
                  <div>Integration</div>
                  <div>1200 AR</div>
                  <div className="text-brand-600 font-medium flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-1.5"></span>Fixed</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-slate-600 italic">
                  We provide NetSuite Core support specifically as it relates to your NetSuite Planning & Budgeting environment and planning processes.
                </p>
              </div>

              <ServiceList items={[
                "Saved Search creation, fixes, and optimization for NSPB data loads",
                "Financial reporting accuracy & reconciliation between NetSuite and NSPB",
                "Data structure and accounting behavior analysis relevant to planning and NSPB integration",
                "Root-cause investigation of NSPB integrations and data inconsistencies",
                "Functional guidance on NetSuite aspects impacting NSPB without risky customization"
              ]} />

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our expertise in NetSuite is focused on data integrity, integrations, and configurations that directly impact your NSPB model's accuracy and performance. We do not provide broad ERP customization or support for unrelated NetSuite modules (e.g., SuiteCommerce, WMS, CRM beyond basic account/item setup).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: OPERATIONAL CONTROL */}
        <div className="mb-32">
          <div className="md:flex md:items-end md:justify-between mb-12 px-2">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-3 tracking-wide uppercase border border-brand-100">
                Included with Monthly Fee
              </span>
              <h3 className="font-display text-3xl font-bold text-slate-900 tracking-tight">Operational Control & Monitoring</h3>
            </div>
            <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm leading-relaxed hidden md:block">
              We monitor your environment and send detailed email alerts when variables or logic drift, so you stay informed without digging through logs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <OperationalCard
              title="NetSuite ↔ NSPB Reconciliation"
              desc="We help ensure that numbers flowing from NetSuite to NSPB remain consistent over time."
              icon={<ArrowRightLeft size={24} />}
              items={[
                "Ongoing reconciliation and variance checks",
                "Email notifications for discrepancies",
                "Early detection of data drift"
              ]}
            />
            <OperationalCard
              title="Backup & Restore Readiness"
              desc="Most teams lack visibility on backups. We provide readiness when issues occur."
              icon={<Shield size={24} />}
              items={[
                "Validation of backup mechanisms",
                "Restore readiness support",
                "Recovery scenario assistance"
              ]}
            />
            <OperationalCard
              title="Proactive Error Monitoring"
              desc="We help teams detect problems before they impact close cycles."
              icon={<Activity size={24} />}
              items={[
                "Monitoring of data loads and rules",
                "Email alerts explaining incorrect variables",
                "Proactive notifications before close"
              ]}
            />
            <OperationalCard
              title="Close-Cycle Assistance"
              desc="We support finance teams during high-pressure periods."
              icon={<CalendarClock size={24} />}
              items={[
                "Sanity checks before close",
                "Rapid support during close windows",
                "Reconciliation under pressure"
              ]}
            />
          </div>
        </div>

        {/* INTEGRITY REVIEW (NEW SECTION) */}
        <div className="mb-32">
          <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-10 md:p-14 border border-brand-100 shadow-[0_20px_50px_-20px_rgba(14,165,233,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-6 py-2.5 rounded-bl-2xl z-10">
              Recommended First Step
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl mr-5 border border-brand-100">
                    <Search size={32} />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900 tracking-tight">Initial Data Integrity Tuning</h3>
                </div>

                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  A focused technical review of your NSPB and NetSuite environment to identify silent errors, risk areas, and logic inconsistencies before they impact planning or close cycles. This is our highly recommended first step for all new clients to establish a clean and stable baseline and reduce future support needs.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm">Review of key calculation logic, rules, and data flows</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm">Identification of silent errors and unexpected behavior</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm">Clear written findings with business-impact explanations</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm">Explicit recommendations with risk and priority level</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm">No system changes without client approval</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.location.href = '#contact'}>Start with Initial Tuning</Button>
                  <Button variant="white" className="border border-slate-200 text-slate-600 hover:border-slate-300" onClick={() => window.location.href = '#contact'}>Schedule a discovery call</Button>
                </div>
              </div>

              <div className="lg:w-80 flex-shrink-0 bg-slate-50/80 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 text-center">
                <div className="text-slate-500 font-medium mb-3">Fixed Scope. Fixed Outcome.</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-4">Starting At</div>
                <div className="text-4xl font-extrabold text-slate-900 mb-2">USD 500</div>
                <div className="text-xs text-slate-400">One-time engagement</div>
              </div>
            </div>

            {/* Background Decor for Card */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* SECTION 3: SYSTEM CHANGES & CONSULTING */}
        <div className="bg-[#1e293b] rounded-[2.5rem] p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-slate-200 overflow-hidden relative">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Tech Texture" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">System Changes & Consulting</h3>
            <p className="text-slate-300 mb-6 md:mb-0 text-lg leading-relaxed">
              When work exceeds normal support scope (e.g., larger logic enhancements, structural model changes), we clearly define it before proceeding. Scoping is transparent and billed separately.
            </p>
          </div>
          <div className="flex-shrink-0 ml-0 md:ml-8 relative z-10">
            <span className="inline-block px-6 py-4 bg-slate-700/50 backdrop-blur-md border border-slate-600 rounded-xl text-white font-medium hover:bg-slate-700 transition-colors">
              Transparent Scoping
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
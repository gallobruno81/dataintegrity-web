import React from 'react';
import { Database } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-brand-600 p-1.5 rounded mr-2">
                <Database className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">DataIntegrity</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Core functional and technical support for Oracle NSPB and NetSuite.
              Helping finance teams keep their models accurate, stable, and aligned with business needs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#nspb" className="hover:text-brand-400 transition-colors">Oracle NSPB Support</a></li>
              <li><a href="#netsuite" className="hover:text-brand-400 transition-colors">NetSuite Support</a></li>
              <li><a href="#philosophy" className="hover:text-brand-400 transition-colors">Logic Correction</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-400 transition-colors">Chat-First Model</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">support@dataintegrity.com</a></li>
              <li><span className="text-slate-500">US: +1 (555) 123-4567</span></li>
              <li className="pt-2">
                <span className="inline-block bg-green-900/30 text-green-400 border border-green-800 text-xs px-2 py-1 rounded-full font-medium">Status: Online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DataIntegrity. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
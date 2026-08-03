import React from 'react';
import { Trophy, Users, Star, Briefcase, Headphones } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-[#012169] text-white py-12 border-y border-blue-900 shadow-xl relative overflow-hidden">
      
      {/* Background subtle mesh grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/80">
          
          {/* Stat 1 */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/60 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-800 shadow-inner">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              500+
            </div>
            <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
              Projects Completed
            </div>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/60 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-800 shadow-inner">
              <Users className="w-6 h-6" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              250+
            </div>
            <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
              Happy Clients
            </div>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/60 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-800 shadow-inner">
              <Star className="w-6 h-6 fill-amber-300" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              99%
            </div>
            <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>

          {/* Stat 4 */}
          <div className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/60 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-800 shadow-inner">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              10+
            </div>
            <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
              Years Experience
            </div>
          </div>

          {/* Stat 5 */}
          <div className="pt-4 md:pt-0 col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-900/60 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-800 shadow-inner">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              24/7
            </div>
            <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
              Support Available
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

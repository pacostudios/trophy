import React from 'react';

function FeatureChip({ icon: Icon, subtitle, title }) {
  return (
    <div className="group flex items-center bg-white rounded-md border border-slate-200 hover:border-[#C41E3A] hover:shadow-lg transition-all duration-300 w-full md:w-auto md:min-w-[280px] overflow-hidden relative">
      {/* Icon Block */}
      <div className="flex-shrink-0 w-12 h-16 flex items-center justify-center text-white bg-[#003358] transition-colors duration-300">
        <div className="group-hover:scale-110 transition-transform duration-300">
          <Icon size={20} />
        </div>
      </div>

      {/* Content Block */}
      <div className="px-4 py-2 flex flex-col justify-center border-l border-slate-100 bg-white grow">
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-1.5 h-1.5 bg-[#C41E3A] rounded-full animate-pulse group-hover:animate-none"></div>
          <span className="text-[10px] font-black text-[#C41E3A] tracking-wider uppercase italic">
            {subtitle}
          </span>
        </div>
        
        <h3 className="text-[14px] font-black text-[#003358] uppercase italic leading-none tracking-tight">
          {title}
        </h3>
      </div>

      {/* Bottom Corner Accent Decor */}
      <div className="absolute bottom-0 right-0 overflow-hidden w-4 h-4 pointer-events-none">
        <div className="absolute bottom-[-10px] right-[-10px] w-5 h-5 bg-slate-50 rotate-45 group-hover:bg-[#C41E3A]/10 transition-colors"></div>
      </div>
    </div>
  );
}

export default FeatureChip;

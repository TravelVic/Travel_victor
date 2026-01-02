
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAccessClick = () => {
    alert("Victor Intelligence: Your access request has been transmitted to our Srinagar office for vetting.");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-3 border-b border-black/5 shadow-sm' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 md:gap-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden">
            <img 
              src="logo.png" 
              alt="Travel Victor Logo" 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-black group-hover:text-brand-blue transition-colors leading-none">Travel Victor</span>
            <span className="text-[6px] md:text-[7px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-brand-orange mt-0.5 md:mt-1">Elite Intelligence</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
          <a href="#destinations" onClick={(e) => handleLinkClick(e, 'destinations')} className="text-black link-hover">Curated</a>
          <a href="#heritage" onClick={(e) => handleLinkClick(e, 'heritage')} className="hover:text-brand-blue transition-colors link-hover">Heritage</a>
          <a href="#discovery" onClick={(e) => handleLinkClick(e, 'discovery')} className="hover:text-brand-blue transition-colors link-hover">Discovery</a>
          <a href="#concierge" onClick={(e) => handleLinkClick(e, 'concierge')} className="hover:text-brand-orange transition-colors link-hover">Concierge</a>
        </div>

        <button 
          onClick={handleAccessClick}
          className="px-5 md:px-8 py-2 md:py-3 bg-brand-blue text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-brand-orange transition-all rounded-full shadow-lg shadow-blue-900/10 active:scale-95"
        >
          {scrolled ? 'Access' : 'Private Client Access'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

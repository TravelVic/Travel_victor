
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const element = document.getElementById('heritage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100vh] md:h-[95vh] w-full flex items-center overflow-hidden bg-white">
      {/* Visual Composition */}
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-full md:h-[80%] md:top-1/2 md:-translate-y-1/2 z-0 opacity-40 md:opacity-100 transition-all duration-1000">
        <div className="relative w-full h-full p-4 md:p-8 reveal">
          <img 
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=2400" 
            alt="Minimalist Landscape"
            className="w-full h-full object-cover rounded-[2rem] md:rounded-[4rem] transition-all duration-[2s] hover:scale-[1.02]"
          />
          {/* Accent Element with Logo */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-6 shadow-2xl rounded-[2.5rem] hidden lg:block reveal delay-500">
            <div className="w-full h-full border border-gray-100 flex flex-col items-center justify-center text-center overflow-hidden rounded-2xl p-4">
               <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 border-2 border-brand-blue rounded-full opacity-10 animate-ping" style={{borderColor: 'var(--brand-blue)'}} />
                  <img src="/public/logo.png" alt="Victor Logo" className="w-16 h-16 object-contain relative z-10" />
               </div>
               <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400">Est. Srinagar</p>
               <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-brand-orange mt-1">Barbarshah Headquarters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 w-full text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <div className="mb-6 md:mb-12 overflow-hidden">
            <span className="inline-block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[0.8em] text-gray-400 reveal">
              Defining The Unreachable
            </span>
          </div>

          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] font-display text-black mb-6 md:mb-8 leading-[1] md:leading-[0.9] tracking-tighter reveal delay-200">
            Beyond the <br className="hidden md:block" />
            <span className="italic font-light text-brand-blue" style={{color: 'var(--brand-blue)'}}>Standard.</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-500 font-light max-w-lg mb-10 md:mb-12 leading-relaxed reveal delay-300 mx-auto md:mx-0">
            The world's most sophisticated AI travel butler. Born in Srinagar, operating across the furthest horizons of human exploration.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 reveal delay-400">
            <button 
              onClick={handleScrollDown}
              className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-orange hover:scale-110 transition-all shadow-xl shadow-blue-900/20 active:scale-95" 
              style={{backgroundColor: 'var(--brand-blue)'}}
            >
              <span className="text-xl">↓</span>
            </button>
            <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-black">
              Scroll to begin <br />
              <span className="text-brand-orange font-bold" style={{color: 'var(--brand-orange)'}}>Your Expedition</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heritage Corner */}
      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-8 text-gray-300 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium hidden sm:block">
        Headquartered in Srinagar, Kashmir
      </div>
    </section>
  );
};

export default Hero;

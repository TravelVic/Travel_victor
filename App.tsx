
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIConcierge from './components/AIConcierge';
import DestinationCard from './components/DestinationCard';
import DiscoveryEngine from './components/DiscoveryEngine';
import { DESTINATIONS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleApplyClick = () => {
    alert("Victor Intelligence: Invitation protocol initialized. Our Srinagar committee will review your profile.");
  };

  const handleRootsClick = () => {
    document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/910000000000?text=I am interested in a bespoke Travel Victor expedition.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Heritage Section */}
        <section className="py-24 md:py-48 bg-white overflow-hidden" id="heritage">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div className="reveal order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-gray-100 shadow-xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.05]" 
                      alt="Heritage Srinagar"
                    />
                    <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-50">
                    <p className="text-brand-blue font-display text-4xl md:text-6xl italic leading-none mb-2 md:mb-4" style={{color: 'var(--brand-blue)'}}>190001</p>
                    <p className="text-brand-orange text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]" style={{color: 'var(--brand-orange)'}}>Heritage Office Srinagar</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal order-1 lg:order-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-300 mb-6 md:mb-10 block">The Legacy</span>
                <h3 className="text-4xl md:text-8xl font-display text-black mb-8 md:mb-12 leading-[1.1] tracking-tight">
                  Born in <br className="hidden md:block" />
                  <span className="italic font-light text-brand-orange" style={{color: 'var(--brand-orange)'}}>Kashmir.</span>
                </h3>
                <p className="text-gray-500 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-lg">
                  Operating from the historic Barbarshah in Srinagar, Travel Victor represents the bridge between ancestral hospitality and futuristic precision. We don't just find hotels; we curate legacies.
                </p>
                <div className="h-px w-20 md:w-24 bg-brand-blue mb-8 md:mb-12" style={{backgroundColor: 'var(--brand-blue)'}} />
                <button 
                  onClick={handleRootsClick}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-blue border-b border-brand-blue/10 pb-2 hover:border-brand-blue transition-all" 
                  style={{color: 'var(--brand-blue)'}}
                >
                  Discover Our Roots
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Collections */}
        <section className="py-24 md:py-48 bg-white border-y border-gray-50" id="destinations">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-32 reveal">
              <div className="max-w-2xl mb-8 lg:mb-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[0.6em] text-brand-blue mb-6 md:mb-8 block" style={{color: 'var(--brand-blue)'}}>Selected Portfolios</span>
                <h3 className="text-4xl md:text-8xl font-display text-black italic leading-[1.1]">Curated Lists</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-lg max-w-sm font-light lg:text-right leading-relaxed">
                A globally distributed network managed from our Srinagar central office using <span className="text-brand-orange font-bold">Neural Intel.</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {DESTINATIONS.map((dest) => (
                <div key={dest.id} className="reveal">
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiscoveryEngine />

        <AIConcierge />

        {/* Closing Membership Section */}
        <section className="py-32 md:py-60 bg-brand-blue text-center relative overflow-hidden" style={{backgroundColor: 'var(--brand-blue)'}}>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-orange rounded-full blur-[100px] md:blur-[150px] opacity-10" style={{backgroundColor: 'var(--brand-orange)'}} />
          <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] md:tracking-[1em] text-white/40 mb-10 md:mb-16 block">The Inner Circle</span>
            <h3 className="text-5xl md:text-[9rem] font-display text-white mb-12 md:mb-20 leading-tight md:leading-none">
              Perfected <br /><span className="italic font-light text-brand-orange" style={{color: 'var(--brand-orange)'}}>Existence.</span>
            </h3>
            <button 
              onClick={handleApplyClick}
              className="px-12 md:px-20 py-6 md:py-8 bg-white text-brand-blue rounded-full font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] hover:bg-brand-orange hover:text-white transition-all shadow-2xl shadow-black/20 active:scale-95" 
              style={{color: 'var(--brand-blue)'}}
            >
              Apply for Invitation
            </button>
          </div>
        </section>
      </main>

      <footer className="py-24 md:py-40 bg-white border-t border-gray-50 px-6 md:px-8">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img src="logo.png" alt="Travel Victor Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-black">Travel Victor</span>
                <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-brand-orange">Heritage Intelligence</span>
              </div>
            </div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-light mb-8 md:mb-12">
              The world's first AI heritage concierge. Reimagining exploration from the heart of Kashmir.
            </p>
            <div className="flex gap-8 md:gap-10 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300">
              <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Archives</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-brand-blue uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold mb-6 md:mb-10" style={{color: 'var(--brand-blue)'}}>Headquarters</h5>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Victor Estate, Barbarshah<br />
              Srinagar, Kashmir<br />
              190001
            </p>
            <p className="text-brand-orange text-[10px] md:text-xs mt-4 md:mt-6 font-bold tracking-widest cursor-pointer hover:underline" style={{color: 'var(--brand-orange)'}}>ENQUIRIES@VICTOR.ELITE</p>
          </div>

          <div>
            <h5 className="text-brand-blue uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold mb-6 md:mb-10" style={{color: 'var(--brand-blue)'}}>Bespoke</h5>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-[10px] md:text-xs font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase">
              <li className="hover:text-brand-blue transition-colors cursor-pointer" onClick={handleApplyClick}>Heritage Selection</li>
              <li className="hover:text-brand-blue transition-colors cursor-pointer" onClick={handleApplyClick}>Private Aviation</li>
              <li className="hover:text-brand-blue transition-colors cursor-pointer" onClick={handleApplyClick}>Villa Procurement</li>
              <li className="hover:text-brand-blue transition-colors cursor-pointer" onClick={handleApplyClick}>Silk Road Access</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto mt-24 md:mt-40 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-300 text-center md:text-left gap-4">
          <p>© 2026 Travel Victor Elite Intelligence. Barbarshah, Srinagar designed by < a href="https://www.abaliqa.com">Abaliqa technologies</a></p>
          <div className="flex gap-8 md:gap-12">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Protocol</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={()=> window.open("https://wa.me/919906266116", "_blank")}
        

        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[150] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Contact Concierge on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16" className="relative z-10">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.972L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
        <div className="absolute right-full mr-4 bg-white text-brand-blue text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Concierge Direct
        </div>
      </button>
    </div>
  );
};

export default App;

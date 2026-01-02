
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { TravelPlan } from '../types';

const AIConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<TravelPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await geminiService.planTrip(query);
      setPlan(result);
    } catch (err: any) {
      setError('Victor Intelligence: System occupied with high-priority briefs. Please retry in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalize = () => {
    alert("Victor Intelligence: Itinerary finalized. A formal briefing document has been sent to your private archive.");
  };

  return (
    <section className="py-24 md:py-40 bg-white" id="concierge">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
          
          <div className="reveal">
            <div className="mb-10 md:mb-12 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-brand-blue mb-4 md:mb-6 block" style={{color: 'var(--brand-blue)'}}>Private Advisory</span>
                <h3 className="text-4xl md:text-8xl font-display text-black mb-6 md:mb-10 leading-tight md:leading-none">
                    Bespoke <br className="hidden md:block" />
                    <span className="italic font-light text-brand-orange" style={{color: 'var(--brand-orange)'}}>Mastery.</span>
                </h3>
                <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
                    Our neural butler Victor learns your nuances to orchestrate travel that transcends traditional luxury. 
                    Brief your requirements below.
                </p>
            </div>

            <form onSubmit={handleConsult} className="space-y-6 md:space-y-8">
              <div className="relative group">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="I am looking for a 7-day heritage experience..."
                  className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-brand-blue p-6 md:p-8 text-black placeholder-gray-300 outline-none transition-all min-h-[140px] md:min-h-[160px] text-base md:text-lg font-light resize-none rounded-xl md:rounded-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="group flex items-center justify-center md:justify-start gap-4 md:gap-6 text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-brand-blue hover:text-brand-orange hover:gap-10 transition-all active:scale-95 disabled:opacity-50 w-full md:w-auto"
                style={{color: 'var(--brand-blue)'}}
              >
                {isLoading ? 'Orchestrating Narrative...' : 'Brief Victor'}
                <span className="hidden md:block h-px w-12 bg-brand-blue group-hover:bg-brand-orange group-hover:w-20 transition-all" style={{backgroundColor: 'var(--brand-blue)'}} />
              </button>
            </form>

            <div className="mt-16 md:mt-20">
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-4 md:mb-6 text-center md:text-left">Trending Inquiries</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {['Srinagar Heritage', 'Arctic Seclusion', 'Island Silk Road'].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setQuery(s)}
                    className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-blue border border-gray-100 hover:border-brand-blue px-4 md:px-6 py-2 rounded-full transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] md:min-h-[600px] reveal delay-200">
            {isLoading ? (
              <div className="h-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center text-center p-8 md:p-12 bg-gray-50 rounded-[2rem] md:rounded-[4rem] border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-brand-blue border-t-transparent rounded-full animate-spin mb-6 md:mb-8" style={{borderColor: 'var(--brand-blue)', borderTopColor: 'transparent'}} />
                <h4 className="text-xl md:text-2xl font-serif text-black italic">Refining Your Request</h4>
                <p className="text-gray-400 text-xs md:text-sm font-light mt-4">Victor is cross-referencing exclusive Srinagar inventory.</p>
              </div>
            ) : plan ? (
              <div className="soft-card rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 animate-fade-up border-t-4 border-t-brand-blue" style={{borderTopColor: 'var(--brand-blue)'}}>
                <div className="flex justify-between items-end mb-10 md:mb-16 border-b border-gray-100 pb-8 md:pb-10">
                  <div>
                    <h4 className="text-3xl md:text-5xl font-serif text-black italic mb-2">{plan.destination}</h4>
                    <p className="text-brand-orange text-[9px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]" style={{color: 'var(--brand-orange)'}}>{plan.duration}</p>
                  </div>
                  <button onClick={() => setPlan(null)} className="text-gray-300 hover:text-brand-blue transition-colors text-[9px] font-bold uppercase tracking-widest">Reset</button>
                </div>

                <div className="space-y-8 md:space-y-12 max-h-[350px] md:max-h-[400px] overflow-y-auto pr-2 md:pr-4 custom-scroll">
                  {plan.itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-6 md:gap-10 group">
                      <div className="text-3xl md:text-4xl font-serif text-gray-100 group-hover:text-brand-blue/20 transition-colors">
                        {String(item.day).padStart(2, '0')}
                      </div>
                      <div>
                        <h5 className="text-[10px] md:text-[11px] font-bold text-black mb-2 md:mb-3 uppercase tracking-widest group-hover:text-brand-blue transition-colors">{item.activity}</h5>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-100">
                  <button 
                    onClick={handleFinalize}
                    className="w-full py-5 md:py-6 bg-brand-blue text-white rounded-full font-bold uppercase text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] hover:bg-brand-orange transition-all shadow-xl shadow-blue-900/10 active:scale-95" 
                    style={{backgroundColor: 'var(--brand-blue)'}}
                  >
                    Finalize Itinerary
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center p-12 md:p-20 text-center border-2 border-dashed border-gray-100 rounded-[2rem] md:rounded-[4rem] group hover:border-brand-blue transition-all">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-100 flex items-center justify-center text-gray-200 group-hover:text-brand-blue group-hover:border-brand-blue transition-all duration-700 mb-6 md:mb-8">
                  <span className="text-2xl">?</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-black mb-4 md:mb-6 italic">The Unwritten Journey</h4>
                <p className="text-gray-400 max-w-xs mx-auto text-xs md:text-sm font-light leading-relaxed">
                  Every masterpiece starts with a conversation. Let Victor craft your legacy itinerary.
                </p>
              </div>
            )}
            {error && <p className="text-center mt-4 text-[10px] text-red-400 uppercase tracking-widest font-bold">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;

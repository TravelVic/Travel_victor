
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { DiscoverySuggestion } from '../types';

const INTEREST_OPTIONS = [
  'Rare Architecture',
  'Private Estate',
  'Total Wellness',
  'Secluded Peaks',
  'Uncharted Desert',
  'Silent Retreat',
  'Elite Cuisine',
  'Expeditionary',
  'Historical Archive',
  'Private Aviation',
  'Deep Sea Access',
  'Alpine Seclusion',
  'Urban Sanctuary',
  'Cultural Heritage',
  'Wildlife Tracking',
  'Arctic Solitude'
];

const DiscoveryEngine: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<DiscoverySuggestion[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  const findDestinations = async () => {
    if (selectedInterests.length === 0) return;
    setIsLoading(true);
    try {
      const results = await geminiService.getPersonalizedSuggestions(selectedInterests);
      setSuggestions(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-48 bg-gray-50" id="discovery">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 reveal">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-6 md:mb-8">Intelligence Mapping</span>
          <h3 className="text-4xl md:text-7xl font-display text-black mb-8 md:mb-10 leading-tight">Neural Discovery</h3>
          <p className="text-gray-500 text-base md:text-lg max-w-xl font-light">
            Select your preferences and let our proprietary algorithms map your next destination with surgical precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100">
              <h4 className="text-black font-serif text-2xl mb-6 md:mb-8 italic">The Selection</h4>
              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {INTEREST_OPTIONS.map(interest => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                      selectedInterests.includes(interest)
                        ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                        : 'bg-transparent border-gray-100 text-gray-400 hover:border-brand-blue hover:text-brand-blue'
                    }`}
                    style={selectedInterests.includes(interest) ? {backgroundColor: 'var(--brand-blue)', borderColor: 'var(--brand-blue)'} : {}}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <button
                onClick={findDestinations}
                disabled={isLoading || selectedInterests.length === 0}
                className="w-full py-5 md:py-6 bg-brand-blue text-white rounded-full font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] transition-all disabled:opacity-30 hover:bg-brand-orange shadow-lg shadow-blue-900/10 active:scale-95"
                style={{backgroundColor: 'var(--brand-blue)'}}
              >
                {isLoading ? 'Scanning Inventory...' : 'Run Discovery'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 h-full">
              {isLoading ? (
                [1, 2].map(i => (
                  <div key={i} className="bg-white rounded-[2rem] md:rounded-[3rem] aspect-square animate-pulse border border-gray-100 flex flex-col p-8 md:p-12">
                    <div className="w-1/2 h-4 bg-gray-100 mb-6 rounded" />
                    <div className="w-full h-8 bg-gray-100 mb-4 rounded" />
                    <div className="w-full h-24 bg-gray-50 rounded" />
                  </div>
                ))
              ) : suggestions.length > 0 ? (
                suggestions.map((s, idx) => (
                  <div key={idx} className="reveal bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-gray-100 hover:border-brand-blue transition-all duration-700 flex flex-col group shadow-sm hover:shadow-xl">
                    <div className="flex justify-between items-start mb-6 md:mb-8">
                      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-orange" style={{color: 'var(--brand-orange)'}}>{s.category}</span>
                      <span className="text-gray-200 group-hover:text-brand-blue transition-colors italic font-serif text-xl md:text-2xl">#0{idx+1}</span>
                    </div>
                    <h4 className="text-2xl md:text-4xl font-serif text-black mb-2">{s.name}</h4>
                    <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">{s.country}</p>
                    <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed italic mb-8 md:mb-10">
                      "{s.reason}"
                    </p>
                    <div className="mt-auto pt-6 md:pt-8 border-t border-gray-50 flex justify-between items-center">
                      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-brand-blue font-bold" style={{color: 'var(--brand-blue)'}}>{s.vibe}</span>
                      <button className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand-orange group-hover:translate-x-2 transition-all" style={{color: 'var(--brand-orange)'}}>
                        Inquire →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="sm:col-span-2 flex flex-col items-center justify-center text-center py-16 md:py-20 bg-white rounded-[2rem] md:rounded-[3rem] border border-dashed border-gray-100 opacity-50">
                   <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-300">Awaiting Discovery Brief</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryEngine;

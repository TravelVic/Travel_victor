
import React, { useState } from 'react';
import { Destination } from '../types';

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleInquire = () => {
    alert(`Victor Intelligence: Initializing inquiry for ${destination.name}. Checking availability at Srinagar HQ...`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleInquire}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 shadow-sm transition-all duration-500 group-hover:shadow-2xl bg-gray-100">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Interaction Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-in-out flex items-center justify-center">
            {/* Quick View Icon */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <button className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </button>
            </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            {/* Category Tag */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                <span className="px-4 py-1.5 bg-brand-orange text-[8px] font-bold uppercase tracking-widest text-white rounded-full shadow-lg" style={{backgroundColor: 'var(--brand-orange)'}}>
                    {destination.category}
                </span>
            </div>

            {/* Wishlist Button */}
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsWishlisted(!isWishlisted);
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg active:scale-95 ${
                    isWishlisted 
                    ? 'bg-brand-orange text-white' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-brand-orange opacity-0 group-hover:opacity-100'
                }`}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill={isWishlisted ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
            </button>
        </div>
      </div>
      
      <div className="px-2 transition-transform duration-500 group-hover:translate-x-1">
        <div className="flex justify-between items-end mb-2">
            <div>
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-1">{destination.country}</p>
                <h4 className="text-2xl font-serif text-black group-hover:text-brand-blue transition-colors duration-300">{destination.name}</h4>
            </div>
            <p className="text-brand-orange font-serif text-lg" style={{color: 'var(--brand-orange)'}}>{destination.price}</p>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2 font-light">
                {destination.description}
            </p>
            <button 
              className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500 text-left hover:text-brand-orange" 
              style={{color: 'var(--brand-blue)'}}
            >
                Add to Wishlist +
            </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

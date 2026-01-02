
export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  price: string;
  category: 'Coastal' | 'Mountain' | 'Urban' | 'Exotic';
}

export interface ItineraryItem {
  day: number;
  activity: string;
  details: string;
}

export interface TravelPlan {
  destination: string;
  duration: string;
  itinerary: ItineraryItem[];
  recommendations: string[];
}

export interface DiscoverySuggestion {
  name: string;
  country: string;
  reason: string;
  category: string;
  vibe: string;
}

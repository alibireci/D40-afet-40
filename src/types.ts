export interface Project {
  id: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  status: 'ongoing' | 'completed' | 'flagship';
  theme: 'recovery' | 'resilience' | 'preparedness' | 'empowerment';
  country: string;
  fundingSource: string;
  image: string;
}

export interface City {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: 'full' | 'associate';
}

export interface NewsItem {
  id: string;
  title: { en: string; tr: string };
  date: string;
  category: string;
  excerpt: { en: string; tr: string };
  image: string;
}

export interface EventItem {
  id: string;
  title: { en: string; tr: string };
  date: string;
  location: { en: string; tr: string };
  type: 'conference' | 'training' | 'workshop';
}

export interface BuildingRequest {
  id: string;
  address: string;
  neighborhood: string;
  type: 'safety_test' | 'retrofitting';
  estimatedCost?: string;
  status: 'pending' | 'scheduled' | 'completed';
}

export interface Volunteer {
  id: string;
  name: string;
  neighborhood: string;
  trainingStatus: 'certified' | 'in_progress' | 'not_started';
  specialty: string;
}

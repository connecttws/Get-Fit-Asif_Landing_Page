export interface FeaturedStory {
  id: string;
  name: string;
  profession: string;
  duration: string;
  weightLoss: string;
  beforeStats: string;
  afterStats: string;
  quote: string;
  image: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  profession: string;
  duration: string;
  weightLoss: string;
  tag: string;
  quote: string;
  beforeStats: string;
  afterStats: string;
  image: string;
}

export interface VideoTestimonialItem {
  id: string;
  name: string;
  profession: string;
  result: string;
  highlight: string;
  instagramUrl: string;
  embedUrl: string;
  posterImage: string;
}

export interface VideoTestimonialSection {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaNote: string;
  videos: VideoTestimonialItem[];
}

export interface CoachingBenefitItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  timingLabel?: string;
  supportingPoints?: string[];
}

export interface ExpectedResultItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ConsultationFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  primaryGoal: string;
  dietPreference: string;
  workoutPreference: string;
  currentWeight: string;
  targetWeight: string;
  notes?: string;
}
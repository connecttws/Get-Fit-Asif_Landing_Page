export interface TransformationStory {
  id: string;
  name: string;
  profession: string;
  age: number;
  duration: string;
  weightLoss: string;
  tag: string;
  quote: string;
  beforeStats: string;
  afterStats: string;
  beforeImg: string;
  afterImg: string;
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

/**
 * Fitness and Nutrition calculation utilities for 90-day transformation plans.
 */

export interface CalorieProfileInput {
  age: number;
  gender: 'male' | 'female';
  weightKg: number;
  heightCm: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'very_active';
  goal: 'fat_loss' | 'muscle_gain' | 'recomposition';
}

export interface CalorieProfileResult {
  bmr: number;
  maintenanceCalories: number;
  targetCalories: number;
  proteinGrams: number;
  projectedLossKg: number;
  waterLiters: number;
}

/**
 * Calculates Basal Metabolic Rate using the Mifflin-St Jeor Equation.
 */
export function calculateBMR(weightKg: number, heightCm: number, age: number, gender: 'male' | 'female'): number {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) return 0;
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === 'male' ? Math.round(base + 5) : Math.round(base - 161);
}

/**
 * Calculates Total Daily Energy Expenditure (TDEE) / Maintenance Calories.
 */
export function calculateMaintenance(bmr: number, activityLevel: CalorieProfileInput['activityLevel']): number {
  const multipliers: Record<CalorieProfileInput['activityLevel'], number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very_active: 1.725,
  };
  return Math.round(bmr * (multipliers[activityLevel] || 1.2));
}

/**
 * Computes full personalized 90-day fitness profile.
 */
export function generateTransformationProfile(input: CalorieProfileInput): CalorieProfileResult {
  const bmr = calculateBMR(input.weightKg, input.heightCm, input.age, input.gender);
  const maintenance = calculateMaintenance(bmr, input.activityLevel);

  let targetCalories = maintenance;
  let projectedLossKg = 0;
  let proteinMultiplier = 1.6; // grams per kg bodyweight

  if (input.goal === 'fat_loss') {
    // Healthy, sustainable deficit (approx 20-25% deficit, ~400-500 kcal/day)
    const deficit = Math.min(600, Math.max(350, Math.round(maintenance * 0.22)));
    targetCalories = Math.max(1200, maintenance - deficit);
    // 90 days at ~450 kcal deficit = ~40,500 kcal = ~5.2 - 9.5 kg pure fat + water retention relief
    projectedLossKg = Math.round(((deficit * 90) / 7700) * 10) / 10;
    proteinMultiplier = 1.8; // higher protein for muscle retention in deficit
  } else if (input.goal === 'muscle_gain') {
    const surplus = Math.round(maintenance * 0.1);
    targetCalories = maintenance + surplus;
    projectedLossKg = -Math.round(((surplus * 90) / 7700) * 10) / 10;
    proteinMultiplier = 2.0;
  } else {
    // recomposition
    targetCalories = maintenance;
    projectedLossKg = Math.round(input.weightKg * 0.05 * 10) / 10;
    proteinMultiplier = 1.9;
  }

  const proteinGrams = Math.round(input.weightKg * proteinMultiplier);
  const waterLiters = Math.round((input.weightKg * 0.04) * 10) / 10;

  return {
    bmr,
    maintenanceCalories: maintenance,
    targetCalories,
    proteinGrams,
    projectedLossKg: Math.abs(projectedLossKg),
    waterLiters,
  };
}

/**
 * Formats price in Indian Rupee format.
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

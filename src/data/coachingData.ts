import contentData from '../../visual-data/content.json';
import {
  FeaturedStory,
  TransformationStory,
  VideoTestimonialItem,
  CoachingBenefitItem,
  JourneyStep,
  ExpectedResultItem,
} from '../types';

export const BRAND_DATA = contentData.brand;

export const HERO_DATA = {
  brandTitle: contentData.hero.brandTitle,
  superHeadline: contentData.hero.superHeadline,
  certification: contentData.hero.certification,
  tagline: contentData.hero.tagline,
  supportingText: contentData.hero.supportingText,
  ctaText: contentData.hero.ctaText,
  ctaNote: contentData.hero.ctaNote,
};

export const TRANSFORMATION_DATA = {
  heading: contentData.transformations.heading,
  ctaText: contentData.transformations.ctaText,
  featuredStory: contentData.transformations.featuredStory as FeaturedStory,
  stories: contentData.transformations.stories as TransformationStory[],
};

export const VIDEO_TESTIMONIALS_DATA = {
  heading: contentData.videoTestimonials.heading,
  subheading: contentData.videoTestimonials.subheading,
  ctaText: contentData.videoTestimonials.ctaText,
  ctaNote: contentData.videoTestimonials.ctaNote,
  videos: contentData.videoTestimonials.videos as VideoTestimonialItem[],
};

export const PILLARS_DATA = {
  heading: contentData.pillars.heading,
  intro: contentData.pillars.intro,
  items: contentData.pillars.items as CoachingBenefitItem[],
  ctaText: contentData.pillars.ctaText,
};

export const PERFECT_FOR_YOU_DATA = {
  heading: contentData.perfectForYou.heading,
  items: contentData.perfectForYou.items as string[],
  ctaText: contentData.perfectForYou.ctaText,
};

export const JOURNEY_DATA = {
  heading: contentData.journey.heading,
  subheading: contentData.journey.subheading,
  ctaText: contentData.journey.ctaText,
  steps: contentData.journey.steps as JourneyStep[],
};

export const EXPECTED_RESULTS_DATA = {
  heading: contentData.expectedResults.heading,
  ctaText: contentData.expectedResults.ctaText,
  items: contentData.expectedResults.items as ExpectedResultItem[],
  disclaimer: contentData.expectedResults.disclaimer,
};

export const COACH_DETAILS = {
  heading: contentData.coach.heading,
  bioParagraphs: contentData.coach.bioParagraphs,
  avatarImg: contentData.coach.picture,
  ctaText: contentData.coach.ctaText,
  secondaryCtaText: contentData.coach.secondaryCtaText,
};
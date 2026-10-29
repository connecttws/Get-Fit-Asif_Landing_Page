'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Transformations } from '../components/Transformations';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { PillarsSection } from '../components/PillarsSection';
import { PerfectForYou } from '../components/PerfectForYou';
import { JourneyTimeline } from '../components/JourneyTimeline';
import { ExpectedResults } from '../components/ExpectedResults';
import { CoachProfile } from '../components/CoachProfile';
import { Footer } from '../components/Footer';
import { EnrollmentModal } from '../components/EnrollmentModal';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { ScrollOverscrollHandler } from '../components/ScrollOverscrollHandler';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialGoal, setModalInitialGoal] = useState('fat_loss');

  const handleOpenConsultation = (goal: string = 'fat_loss') => {
    setModalInitialGoal(goal);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900 flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

      {/* Main Content Sections - Exactly as Requested */}
      <main className="flex-1">
        {/* 1. Hero with VSL Video and CTA Button */}
        <Hero onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 2. Real People, Real Results - Success Stories That Motivate & CTA Button */}
        <Transformations onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 2b. Video Testimonials Slider with Phone Frames & Click-to-Play */}
        <VideoTestimonials onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 3. Your Fitness. Your Plan. Your Progress. (4 Points) & CTA Button */}
        <PillarsSection onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 4. This Plan Is Perfect For You (6 Points) & CTA Button */}
        <PerfectForYou onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 5. Your 90-Day Journey: Simple, Clear, Effective (Steps 1, 2, 3) & CTA Button */}
        <JourneyTimeline onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 6. EXPECTED RESULTS AFTER 90 DAYS: (3 Points) & CTA Button */}
        <ExpectedResults onOpenConsultation={() => handleOpenConsultation('fat_loss')} />

        {/* 7. Meet Your Coach (Picture, Bio & CTA Button) */}
        <CoachProfile onOpenConsultation={() => handleOpenConsultation('fat_loss')} />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Connect */}
      <FloatingWhatsApp />

      {/* Eliminates Bottom & Horizontal Elastic Rubber-Banding while Keeping Top Pull-To-Refresh */}
      <ScrollOverscrollHandler />

      {/* Consultation Assessment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialGoal={modalInitialGoal}
      />
    </div>
  );
}

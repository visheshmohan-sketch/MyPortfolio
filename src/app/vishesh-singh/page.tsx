import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import AIInitiatives from '@/components/AIInitiatives'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import { ResumeProvider } from '@/lib/resumeContext'
import visheshResume from '@/lib/visheshResume.json'
import type { ResumeData } from '@/lib/resumeTypes'

export const metadata = {
  title: 'Vishesh Singh | Engineering Delivery & Capital Projects Leader',
  description: 'Portfolio of Vishesh Singh, P.E., MBA, an engineering delivery and capital projects leader.',
}

export default function VisheshSinghPortfolio() {
  return (
    <ResumeProvider customResume={visheshResume as ResumeData}>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <AIInitiatives />
        <Projects />
        <Contact />
      </main>
    </ResumeProvider>
  )
}

import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Interests from '@/components/Interests'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lenka Živković",
  url: "https://lenka-zivkovic.vercel.app",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer specializing in React and Next.js with five years of experience delivering complete web solutions.",
  knowsAbout: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Headless CMS"],
  sameAs: [
    "https://www.linkedin.com/in/lenka-zivkovic/",
    "https://github.com/pilena",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pančevo",
    addressCountry: "RS",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </>
  )
}

import { Navbar } from '@/components/navbar'
import { SkyAbout } from '@/components/sky-about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <main>
        <SkyAbout />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

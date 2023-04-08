// import { Inter } from 'next/font/google'
import IntroSection from '../components/intro-section/intro-section'
import About from '../components/about/about'
import Services from '../components/services/services'
import ContactUs from '../components/contact-us/contact-us'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <IntroSection />
      <main id="main">
        <About />
        <Services />
        <ContactUs />
      </main>
    </>
  )
}

import DeckSection from '@/components/landing/DeckSection'
import FooterSection from '@/components/landing/FooterSection'
import HeroSection from '@/components/landing/HeroSection'
import ImportSection from '@/components/landing/ImportSection'
import TrackerSection from '@/components/landing/TrackerSection'

export default function Home() {
  return (
    // h-screen ve overflow-y-scroll ile tüm ekranı kaplar ve kaydırmaya izin verir
    // snap-y ve snap-mandatory: Kaydırma bitince en yakın bölüme "yapışır"
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth -webkit-overflow-scrolling: touch;  relative ">
      <HeroSection />
      <DeckSection />
      <ImportSection />
      <TrackerSection />
      <FooterSection />
    </main>
  )
}

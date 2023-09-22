import About from '@/components/About/About'
import Customers from '@/components/Customers/Customers'
import DreamerHome from '@/components/DreamerHome/DreamerHome'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import OurBestHome from '@/components/OurBestHome/OurBestHome'
import OurValue from '@/components/OurValue/OurValue'
import Solutions from '@/components/Solutions/Solutions'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home () {
  return (
    <>
      <Header />
      <main className="font-inter">
        <About />
        <Solutions />
        <DreamerHome />
        <OurValue />
        <hr className='container my-4' />
        <OurBestHome />
        <Customers />
      </main>
      <Footer />
    </>
  )
}

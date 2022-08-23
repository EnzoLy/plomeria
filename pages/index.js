import Navbar from '../components/navbar/navbar'
import Header from '../components/home/header/Header'
import styles from './styles.module.css'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import { AboutUs } from '../components/home/aboutus/AboutUs'
import Contact from '../components/home/contact/Contact'
import { Services } from '../components/home/services/Services'

export default function Index () {
  // if (typeof window !== 'undefined') { // The code inside brackets will be executed ONLY in browser
  //   const observer = new IntersectionObserver(entries => {
  //     // Loop over the entries
  //     entries.forEach(entry => {
  //       // If the element is visible
  //       if (entry.isIntersecting && !entry.target.classList.contains('styles_slide_top__ehyTe')) {
  //         // Add the animation class
  //         entry.target.classList.add('styles_slide_top__ehyTe')
  //         console.log(entry.target)
  //         console.log('added')
  //       }
  //     })
  //   })

  //   observer.observe(document.getElementById('article'))
  // }

  return (
    <>
      <div className={styles.whatsapp}>
        <Image src='/imgs/whatsapp.png' width='70px' height='70px' alt='whatsapp_img' />
      </div>

      <header className={styles.container}>
        <Navbar />
        <Header />
      </header>

      <AboutUs />

      <Services />

      <Contact />

      <Footer />
    </>
  )
}

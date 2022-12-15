import styles from './Hero.module.css'
import cinema from '../../public/Images/cinema.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className={styles.Hero}>
        <Image src={cinema} objectFit='cover' layout='fill' alt='Hero-Image' priority />
        <div className={styles.watch}>
          Watch 
          Something 
          Incredible.
        </div>
    </div>
  )
}

export default Hero
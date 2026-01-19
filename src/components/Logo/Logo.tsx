import styles from "./Logo.module.css";
import logo from '../../assets/logo/logo.png'

export function Logo () {
  return (
    <a
      className={styles.link}
      href='/'
    >
      <img
        className={styles.logo}
        src={logo}
        alt='StreamVibe'
        width='200'
        height='60'
      />
    </a>
  )
}
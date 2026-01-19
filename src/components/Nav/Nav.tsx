import styles from "./Nav.module.css";

export function Nav () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <a className={styles.navLink} href='/' target='_blank'>
            Home
          </a>
        </li>
        <li className={styles.navLi}>
          <a className={styles.navLink} href='/' target='_blank'>
            Movies & Shows
          </a>
        </li>
        <li className={styles.navLi}>
          <a className={styles.navLink} href='/' target='_blank'>
            Support
          </a>
        </li>
        <li className={styles.navLi}>
          <a className={styles.navLink} href='/' target='_blank'>
            Subscriptions
          </a>
        </li>

      </ul>
    </nav>
  )
}
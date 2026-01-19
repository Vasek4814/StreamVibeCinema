import styles from "./ActiveBar.module.css"
import iconSearch from "../../assets/icons/Search.svg";
import iconNotification from "../../assets/icons/Notification.svg";

export function ActiveBar() {
  return(
    <div className={styles.activeBar}>
      <ul className={styles.activeBarUl}>
        <li className={styles.activeBarLi}>
          <a
            className={styles.activeBarLink}
            href="/"
          >
            <img
              className={styles.activeBarIcon}
              src={iconSearch}
              alt="iconSearch"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className={styles.activBarLi}>
          <a
            className={styles.activeBarLink}
            href="/"
          >
            <img
              className={styles.activeBar_Icon}
              src={iconNotification}
              alt="iconNotification"
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

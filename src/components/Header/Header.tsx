import { Logo } from "./../Logo/Logo.tsx"
import { Nav } from './../Nav/Nav.tsx'
import {ActiveBar} from "./../ActiveBar/ActiveBar.tsx";
import styles from './Hedaer.module.css'


export function Header() {
  console.log(styles)
  return (
    <header className={styles.header}>
      <Logo/>
      <Nav/>
      <ActiveBar/>
    </header>
  )
}




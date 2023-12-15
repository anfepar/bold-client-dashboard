import Image from "next/image";
import styles from './Header.module.sass'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Image fill className={styles.container__image} src="/bold_logo.png" alt="Logo de bold" style={{ objectFit: "contain", objectPosition: "left" }} />
      </div>
    </header>
  )
}
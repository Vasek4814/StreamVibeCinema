import styles from '@/components/TitleText/Text.module.css'

export function Text () {
  return (<>
    <div className={styles.text}>
      <h1 className={styles.h1}>Avengers : Endgame</h1>
      <p className={styles.p}>With the help of remaining allies,
        the Avengers must assemble once more in order to
        undo Thanos's actions and undo the chaos to the universe,
        no matter what consequences may be in store,
        and no matter who they face... Avenge the fallen.
      </p>
    </div>
  </>)
}
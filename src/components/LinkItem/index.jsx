import styles from './styles.module.scss';

export function LinkItem({ linkHref, linkTitle, linkLabel }) {

  let comingSoon = false;
  
  return (
    <div className={styles.links}>
        <a
          target="_blank"
          rel="noreferrer"
          href={linkHref}
          title={linkTitle}
        >
          {linkLabel}
        </a>
      </div>
  )
}
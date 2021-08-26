import Image from 'next/image';

import styles from './styles.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          className={styles.avatar}
          src="./dayane-silva-avatar.svg"
          alt="Imagem de Dayane Silva"
        />
        <a className={styles.card__urlSite} href="#">
          dayanesilva.com.br
        </a>
        <div className={styles.card__desc}>
          Marketing de conteúdo e estratégias digitais para negócios online.
        </div>
      </div>
      <div className={styles.card__links}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/zt16EzCUZ2pkCzug9"
        >
          Consultoria de Marketing
        </a>
      </div>
      <div className="inactive">
        <a href="#">Ebook: Guia Simplificado do Marketing Digital</a>
        <span>Em Breve</span>
      </div>
      <div className="inactive">
        <a href="#">Newsletter</a>
        <span>Em Breve</span>
      </div>
    </div>
  );
};

export default Card;

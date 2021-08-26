import Image from 'next/image';

import styles from './styles.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          className={styles.avatar}
          src="./dayane-silva-avatar.png"
          alt="Imagem de Dayane Silva"
        />
        <a
          className={styles.card__urlSite}
          href="https://site.dayanesilva.com.br?utm_source=instagram&utm_medium=link_instagram&utm_campaign=views_site"
        >
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

      <div className={styles.card__links}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/JTTeTfunso3nnyDm7"
        >
          Análise de Perfil
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

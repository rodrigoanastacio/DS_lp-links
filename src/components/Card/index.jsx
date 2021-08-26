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
        <div className={styles.card__title}>@efeitoborboleta.mkt</div>
        <div className={styles.card__desc}>
          Marketing de conteúdo para negócios digitais
        </div>
        <a href="https://site.dayanesilva.com.br/">dayanesilva.com.br</a>
      </div>
      <div className={styles.card__links}>
        <a href="#">Link</a>
      </div>
      <div className={styles.card__links}>
        <a href="#">Link</a>
      </div>
      <div className={styles.card__links}>
        <a href="#">Link</a>
      </div>
    </div>
  );
};

export default Card;

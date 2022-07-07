import Image from 'next/image';
import { LinkItem } from '../LinkItem';

import styles from './styles.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          className={styles.avatar}
          src="./foto-perfil.jpg"
          alt="Imagem de Dayane Silva"
        />
        <h2 className={styles.card__urlSite}>Dayane Silva</h2>        
        <div className={styles.card__desc}>
          Marketing de conteúdo e estratégias digitais para negócios online.
        </div>
      </div>

      <LinkItem 
        linkHref="https://br.pinterest.com/daysiulva/"
        linkTitle="Pinterest"
        linkLabel="Pinterest"  
      />

      <div className="inactive">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/JTTeTfunso3nnyDm7"
        >
          Consultoria de Imagem
        </a>
        <span>Em Breve</span>
      </div>

      <div className="inactive">
        <a href="#">Canal Youtube</a>
        <span>Em Breve</span>
      </div>
      <div className="inactive">
        <a href="#">Blog</a>
        <span>Em Breve</span>
      </div>
    </div>
  );
};

export default Card;

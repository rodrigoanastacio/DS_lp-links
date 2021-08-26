import styles from './styles.module.scss';

const MadeBy = () => {
  return (
    <p className={styles.madeBy}>
      Feito com <img src="/coracao.svg" alt="Feito com amor" /> por Rodrigo
      Anastacio
    </p>
  );
};

export default MadeBy;

import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';
import styles from './FoodCard.module.scss';

const FoodCard = ({ img, title, price, description }) => {
  return (
    <article className={styles.card} tabIndex="0" aria-label="Book a table">
      <img src={img} alt={title} width="229px" height="151px" />
      <section>
        <header>
          <h5 tabIndex="0">{title}</h5>
          <h5 tabIndex="0">$ {price}</h5>
        </header>
        <summary>
          <p tabIndex="0">{description}</p>
        </summary>
        <footer>
          <BasicButton type="btn-secondary">Order a delivery</BasicButton>
        </footer>
      </section>
    </article>
  );
};

export default FoodCard;

import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';

import { ROUTES } from 'utils/routes';

import FoodCard from 'components/cards/FoodCard/FoodCard';

import styles from './SpecialsSection.module.scss';

import { specials } from '../utils/data';

const FoodCards = () =>
  specials.map((item, idx) => (
    <FoodCard
      key={idx}
      cardIdx={idx}
      img={item.img}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));

export const SpecialsSection = () => (
  <section className={styles['section-container']}>
    <div className={styles['section-header']}>
      <h2 tabIndex="0">This weeks specials!</h2>
      <BasicButton type="btn-primary" linkTo={ROUTES.MAIN_MENU} animation={true}>
        Online Menu
      </BasicButton>
    </div>
    <div className={styles['section-content']}>
      <FoodCards />
    </div>
  </section>
);

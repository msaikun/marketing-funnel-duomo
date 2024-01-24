import classNames from 'classnames';
import styles from './radiobutton.module.scss';

export interface IRadioButtonOption {
  id: number;
  title: string;
  price: number;
  isTheMostPopular?: boolean;
}

interface IRadioButton {
  value: IRadioButtonOption;
  selectedOption: IRadioButtonOption | null;
  onChange: (value: IRadioButtonOption) => void;
}

export const ReadioButton = ({
  value,
  selectedOption,
  onChange,
}: IRadioButton) => {
  const isChecked = selectedOption?.id === value.id;

  return (
    <label className={styles.wrapper}>
      {value.isTheMostPopular && (
        <div className={classNames(styles.mostPopularPlanLabel, { [styles.mostPopularCheckedLabel]: isChecked && selectedOption })}>
          Most popular
        </div>
      )}

      <div className={classNames(styles.plan, {
        [styles.mostPopularPlan]: value.isTheMostPopular,
        [styles.mostPopularCheckedPlan]: isChecked,
      })}>
        <input
          name="type"
          type="radio"
          checked={isChecked}
          value={value.id}
          onChange={() => onChange(value)}
        />

        <div className={styles.name}>{value.title}</div>

        <div className={styles.details}>
          <span className={styles.currency}>$</span>
          <span className={styles.price}>{value.price}</span>
        </div>
      </div>
    </label>
  );
};

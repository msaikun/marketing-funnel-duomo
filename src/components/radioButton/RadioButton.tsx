import classNames from 'classnames';
import styles from './radiobutton.module.scss';
import { plusJakartaSans } from '../../../styles/fonts';

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

  console.log('isChecked', isChecked);
  return (
    <div className={classNames(styles.wrapper, plusJakartaSans.className)}>
      {value.isTheMostPopular && (
        <div className={classNames(styles.mostPopularPlanLabel, { [styles.mostPopularCheckedPlanLabel]: isChecked })}>
          Most popular
        </div>
      )}
      <label className={styles.inputWrapper}>
        <div className={classNames(styles.radioButton, {
          [styles.mostPopularPlan]: value.isTheMostPopular,
          [styles.mostPopularCheckedPlan]: isChecked,
        })}>
          <input
            name={value.title}
            type="radio"
            checked={isChecked}
            value={value.id}
            id={value.id.toString()}
            className={classNames({ [styles.checkedInput]: isChecked })}
            onChange={() => onChange(value)}
          />
          <span className={classNames(styles.control, {
            [styles.checkedControl]: isChecked
          })}></span>

          <div className={styles.name}>{value.title}</div>
          <div className={styles.details}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>{value.price}</span>
          </div>
        </div>
      </label>
    </div>
  );
};

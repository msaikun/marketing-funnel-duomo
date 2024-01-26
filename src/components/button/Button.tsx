import classNames from 'classnames';

import styles              from './button.module.scss';
import { plusJakartaSans } from '../../../styles/fonts';

type TButtonType = 'button' | 'submit' | 'reset';

interface IButtonProps {
  type?     : TButtonType;
  title     : string;
  disabled? : boolean;
  onClick?  : () => void;
}

export const Button = ({
  title,
  type     = 'button',
  disabled = false,
  onClick,
}: IButtonProps) => (
  <button
    type      = {type}
    disabled  = {disabled}
    onClick   = {onClick}
    className = {classNames(styles.button, plusJakartaSans.className, {
      [styles.isDisabled]: disabled,
    })}
  >
    {title}
  </button>
);

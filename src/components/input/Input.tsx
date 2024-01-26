import { useState } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';

interface IInputProps {
  name     : string;
  label?   : string;
  type     : string;
  required : boolean;
  disabled?: boolean;
  value    : string;
  error?   : string;
  onChange : (value: string) => void;
}

export const Input = ({
  name,
  label = 'Email',
  type  = 'text',
  disabled = false,
  error,
  required,
  value,
  onChange
}: IInputProps) => {
  const [blurred, setBlurred] = useState(false);

  const onBlur = () => setBlurred(true);

  const withError = blurred && error;

  return (
    <div className={styles.wrapper}>
      <input
        name     = {name}
        type     = {type}
        required = {required}
        disabled = {disabled}
        value    = {value}
        className={classNames(styles.field, {
          [styles.fieldWithError]: withError,
          [styles.disabledField]: disabled
        })}
        onChange = {(e) => onChange(e.target.value)}
        onBlur   = {onBlur}
      />
      {withError && <div className={styles.errorMessage}>{error}</div>}

      <label htmlFor="name" className={classNames(styles.label, { [styles.disabledLabel]: disabled })}>
        {label}
      </label>
    </div>
  );
}

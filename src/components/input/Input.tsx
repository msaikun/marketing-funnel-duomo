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
    <div>
      <input
        name     = {name}
        type     = {type}
        required = {required}
        value    = {value}
        className={classNames(styles.field, {
          [styles.fieldWithError]: withError,
          [styles.disabledField]: disabled
        })}
        onChange = {(e) => onChange(e.target.value)}
        onBlur   = {onBlur}
      />

      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      {withError && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

//   name,
//   value,
//   onChange,
//   error,
//   id = "",
//   required = false,
// }) => {
//   const [blurred, setBlurred] = useState(false);
//   const showError = blurred && error.isError;

//   const handleBlur = () => {
//     setBlurred(true);
//   };

//   return (
//     <div className={styles.container}>
//       <input
//         className={classNames(styles.input, {
//           [styles.isError]: error.isError,
//         })}
//         type={type}
//         name={name}
//         value={value}
//         onChange={(e) => {
//           onChange(e);
//           setBlurred(false);
//         }}
//         onBlur={handleBlur}
//         id={id}
//         required={required}
//       />

//       {showError && <div className={styles.errorMessage}>{error.message}</div>}

//       <label className={styles.label} htmlFor="name">
//         Email
//       </label>
//     </div>
//   );
// };
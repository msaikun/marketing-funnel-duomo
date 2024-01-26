import { FormEvent, useState } from 'react';
import { useRouter }           from 'next/router';
import classNames              from 'classnames';

import styles from './personalisedGrowthForm.module.scss';

import { Block }            from '../../components/block/Block';
import { Button }           from '../../components/button/Button';
import { Input }            from '../../components/input/Input';
import { inter }            from '../../../styles/fonts';
import { useValidateEmail } from '../../utils/common';
import { postQuizData }     from '../../utils/requests';

export const PersonalisedGrowthForm = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();

  const { error, handleError } = useValidateEmail();

  const selectedPlanId = Number(router.query.planId);

  const onInputChange = (value: string) => {
    handleError(value);
    setEmail(value);
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = { email, selectedPlanId };

    try {
      await postQuizData(data);
    } catch (error) {
      console.error(error);
    }

    router.push('/growth-progress');
  };

  return (
    <div className={styles.wrapper}>
      <Block title="Enter your email to get your personalised Spiritual Growth Plan">
        <form
          onSubmit  = {onSubmit}
          className = {classNames(styles.form, inter.className)}
        >
          <Input
            required
            type     = "email"
            name     = "email"
            value    = {email}
            onChange = {onInputChange}
            error    = {error}
          />

          <div className={styles.button}>
            <Button
              title    = "Continue"
              type     = "submit"
              disabled = {!!error}
            />
          </div>
        </form>
      </Block>
    </div>
  );
}

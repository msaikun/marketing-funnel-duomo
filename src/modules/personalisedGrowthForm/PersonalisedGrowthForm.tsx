import { FormEvent, useState } from "react";
import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import styles from './personalisedGrowthForm.module.scss';
import classNames from "classnames";
import { inter } from "../../../styles/fonts";
import { useValidateEmail } from "../../utils/common";
import { useRouter } from "next/router";
import { postQuizData } from "../../utils/requests";

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
          onSubmit={onSubmit}
          className={classNames(styles.form, inter.className)}
        >
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            error={error}
            required
          />

          <div className={styles.button}>
            <Button
              title="Continue"
              type="submit"
              disabled={!!error}
            />
          </div>
        </form>
      </Block>
    </div>
  );
}

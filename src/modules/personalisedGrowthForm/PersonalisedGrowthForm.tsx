import { useState } from "react";
import { Block } from "../../components/block/Block";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import styles from './personalisedGrowthForm.module.scss';

export const PersonalisedGrowthForm = () => {
  const [email, setEmail] = useState('');
  const onSubmit = () => {};

  return (
    <Block title="Enter your email to get your personalised Spiritual Growth Plan">
      <form
        onSubmit={onSubmit}
        style={{ width: '100%' }}
        // className={classNames(styles.form, inter.className)}
      >
        <div className={styles.email}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={setEmail}
            // id="name"
            // error={error}
            required
          />
        </div>

        <div className={styles.button}>
          <Button
            title="Continue"
            type="submit"
            // disabled={error.isError}
          />
        </div>
      </form>
    </Block>
  );
}
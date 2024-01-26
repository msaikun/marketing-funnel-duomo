import { useRouter } from 'next/router';
import styles        from './startPage.module.scss';
import { Button }    from '../../components/button/Button';

export const StartPage = () => {
  const router = useRouter();

  const onButtonClick = () => router.push('/dashboard');

  return (
    <div className={styles.wrapper}>
      <Button title="Let's start a quiz!" onClick={onButtonClick} />
    </div>
  );
}

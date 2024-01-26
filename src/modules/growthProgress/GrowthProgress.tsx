import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles           from './growthProgress.module.scss';
import { Block }        from '../../components/block/Block';
import { Button }       from '../../components/button/Button';
import GrowthChartImage from '../../../public/images/growth.png';

export const GrowthProgress = () => {
  const router = useRouter();

  const onButtonClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Block title="See your Spiritual Growth progress by Sep 17, 2024">
        <Image alt="Growth" src={GrowthChartImage} />

        <div className={styles.button}>
          <Button title="Continue" onClick={onButtonClick} />
        </div>
      </Block>
    </div>
  );
}

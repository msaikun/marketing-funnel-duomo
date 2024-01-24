import { Block } from "../../components/block/Block";
import Image from "next/image";
import styles from './growthProgress.module.scss';
import GrowthChartImage from '../../../public/images/growth.png';
import { Button } from "../../components/button/Button";
import { useRouter } from "next/navigation";

export const GrowthProgress = () => {
  const router = useRouter();

  const onButtonClick = () => {
    router.push('/');
  };

  return (
    <Block title="See your Spiritual Growth progress by Sep 17, 2024">
      <div style={{ width: '100%' }}>
        <div className={styles.growth}>
          <Image alt="Growth" src={GrowthChartImage} height={354} />
        </div>

        <div className={styles.button}>
          <Button title="Continue" onClick={onButtonClick} />
        </div>
      </div>
    </Block>
  );
}

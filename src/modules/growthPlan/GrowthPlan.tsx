import { useEffect, useState } from "react";
import { Block } from "../../components/block/Block";
import { Card } from "../../components/card/Card";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import { growthPlan } from "../../utils/mockData";
import style from './growthPlan.module.scss';
import CheckedCircleIcon from '../../../public/images/checked-circle-icon.png'
import Image from "next/image";
import styles from './growthPlan.module.scss';
import { useRouter, useSearchParams } from "next/navigation";

export const GrowthPlan = () => {
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedPlanId = searchParams.get('planId');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 5 : 100));
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push(`/form?planId=${selectedPlanId}`);
  //   }, 2000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <Block title="We are crafting your spiritual growth plan">
      <>
        <div className={styles.progressBar}>
          <ProgressBar progress={75} percentage={87} />
        </div>

        <Card>
          {growthPlan.map(({ id, text }) => (
            <div key={id} className={styles.option}>

              <div className={style.progressIndicator}>
                {progress === 100 ? (
                  <Image alt="Checked circle icon" src={CheckedCircleIcon} width={24} />
                ) : (
                 <ProgressBar progress={progress} stroke="#222B38" size={18} strokeWidth={2} />
                )}
              </div>

              <div className={style.text}>{text}</div>
            </div>
          ))}
        </Card>
      </>
    </Block>
  );
}

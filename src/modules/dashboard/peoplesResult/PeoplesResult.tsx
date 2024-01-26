import classNames from 'classnames';

import styles from './peoplesResult.module.scss';

import { Block }         from '../../../components/block/Block';
import { Card }          from '../../../components/card/Card';
import { peoplesResult } from '../../../utils/mockData';
import { lora }          from '../../../../styles/fonts';

export const PeoplesResult = () => (
  <Block title="People just like you achieved great results with App!">
    <Card>
      {peoplesResult.map(({ id, text, percentage }) => (
        <div key={id} className={styles.result}>
          <div className={classNames(styles.percentage, lora.className)}>
            {percentage}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      ))}
    </Card>
  </Block>
);

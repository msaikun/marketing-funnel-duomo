import Image from 'next/image';

import style                 from './whatYouGet.module.scss';
import { Block }             from '../../../components/block/Block';
import { Card }              from '../../../components/card/Card';
import { whatYouGetOptions } from '../../../utils/mockData';
import CheckedIcon           from '../../../../public/images/checked-icon.png';

export const WhatYouGet = () => (
  <Block title="What you get">
    <Card>
      {whatYouGetOptions.map(({ id, text }) => (
        <div key={id} className={style.option}>
          <Image
            className = {style.image}
            alt       = "checked Icon"
            src       = {CheckedIcon}
            width     = {14}
          />

          <div className={style.text}>{text}</div>
        </div>
      ))}
    </Card>
  </Block>
);

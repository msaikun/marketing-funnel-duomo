import { ReactNode } from 'react';
import classNames    from 'classnames';

import styles   from './block.module.scss';
import { lora } from '../../../styles/fonts';

interface IBlockProps {
  title    : string;
  children : ReactNode;
}

export const Block = ({ title, children }: IBlockProps) => (
  <section className={styles.block}>
    <h2 className={classNames(styles.title, lora.className)}>
      {title}
    </h2>
    {children}
  </section>
);

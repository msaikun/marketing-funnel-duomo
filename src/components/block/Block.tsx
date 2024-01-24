import { ReactNode } from 'react';
import styles from './block.module.scss';
import classNames from 'classnames';
import { lora } from '../../../styles/fonts';

interface IBlockProps {
  title    : string;
  children : ReactNode;
}

export const Block = ({ title, children }: IBlockProps) => (
  <section className={styles.block}>
    <h2 className={classNames(styles.title, lora.className)}>{title}</h2>
    {children}
  </section>
);

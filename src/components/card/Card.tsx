import { ReactNode } from 'react';
import styles from './card.module.scss';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className={styles.card}>{children}</div>
);
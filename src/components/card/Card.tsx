import { ReactNode } from 'react';
import classNames    from 'classnames';

import styles              from './card.module.scss';
import { plusJakartaSans } from '../../../styles/fonts';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className={classNames(styles.card, plusJakartaSans.className)}>
    {children}
  </div>
);
import Image from 'next/image';

import styles from './userReviews.module.scss';

import { Block }        from '../../../components/block/Block';
import { usersReviews } from '../../../utils/mockData';
import { Card }         from '../../../components/card/Card';
import RatingIcon       from '../../../../public/images/rating-icon.png'


export const UsersReviews = () => (
  <Block title="Users love App!">
    {usersReviews.map(({ id, fullName, date, comment }) => (
      <div className={styles.wrapper}>
        <Card>
          <div key={id} className={styles.review}>
            <div className={styles.reviewInfo}>
              <div className={styles.userInfo}>
                <div className={styles.user}>{fullName}</div>
                <div className={styles.date}>{date}</div>
              </div>
    
              <Image alt="rating" src={RatingIcon} height={20} width={60} />
            </div>

            <div className={styles.comment}>{comment}</div>
          </div>
        </Card>
      </div>
    ))}
  </Block>
);

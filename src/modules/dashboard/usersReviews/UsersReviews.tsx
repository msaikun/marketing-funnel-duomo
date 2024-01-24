import { Block } from '../../../components/block/Block';
import { usersReviews } from '../../../utils/mockData';
import styles from './userReviews.module.scss';
import Image from "next/image";
import RatingIcon from '../../../../public/images/rating-icon.png'
import { Card } from '../../../components/card/Card';


export const UsersReviews = () => {
  return (
    <Block title="Users love App!">
      {/* <div className={styles.wrapper}> */}
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
      {/* </div> */}
    </Block>
  );
}

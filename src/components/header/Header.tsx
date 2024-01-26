import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles   from './header.module.scss';
import BackIcon from '../../../public/images/back-icon.png';
import MenuIcon from '../../../public/images/menu-icon.png';

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.back} onClick={() => router.back()}>
          <Image
            alt    = "Back icon"
            src    = {BackIcon}
            height = {16}
            width  = {18}
          />
        </a>

        <div className={styles.app} onClick={() => router.push("/")}>
          App
        </div>

        <div className={styles.menu}>
          <Image alt="Menu icon" src={MenuIcon} />
        </div>
      </nav>
    </header>
  );
};

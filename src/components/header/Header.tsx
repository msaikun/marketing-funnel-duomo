import Image from "next/image";
import { useRouter } from "next/navigation";

import BackIcon from '../../../public/images/back-icon.png';
import MenuIcon from '../../../public/images/menu-icon.png';

import styles from "./header.module.scss";

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className={styles.nav}>
        <a onClick={() => router.back()}>
          <Image alt="Back icon" src={BackIcon} height={16} width={18} />
        </a>

        <div onClick={() => router.push("/")}>
          App
        </div>

        <div>
          <Image alt="Menu icon" src={MenuIcon} />
        </div>
      </nav>
    </header>
  );
};
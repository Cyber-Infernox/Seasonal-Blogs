import Image from "next/image";
import Link from "next/link";

// Style
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link className={styles.link} href="/">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          distinctio reprehenderit error officia debitis, quasi velit! Facilis
          soluta, obcaecati delectus rem hic exercitationem perspiciatis ad
          blanditiis mollitia dolorem vero repellendus?...
        </p>
        <Link className={styles.lnk} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

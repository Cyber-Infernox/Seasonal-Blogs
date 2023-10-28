import Image from "next/image";
import Link from "next/link";

// Style
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular categories</h1>
      <div className={styles.categories}>
        <Link
          className={`${styles.category} ${styles.style}`}
          href="/blog?cat=style"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link
          className={`${styles.category} ${styles.fashion}`}
          href="/blog?cat=fashion"
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          className={`${styles.category} ${styles.food}`}
          href="/blog?cat=food"
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        <Link
          className={`${styles.category} ${styles.travel}`}
          href="/blog?cat=travel"
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>
        <Link
          className={`${styles.category} ${styles.culture}`}
          href="/blog?cat=culture"
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link
          className={`${styles.category} ${styles.coding}`}
          href="/blog?cat=coding"
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;

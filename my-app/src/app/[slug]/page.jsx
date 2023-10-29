import Image from "next/image";

// Components
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

// Style
import styles from "./singleBlogPage.module.css";

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              perferendis. Laboriosam id tenetur modi distinctio exercitationem
              eaque mollitia reprehenderit in recusandae deserunt est provident,
              quasi alias qui labore nostrum perspiciatis voluptas. Rem
              accusamus quam voluptatibus, incidunt vel qui culpa accusantium
              ullam illo, maxime necessitatibus magni veniam inventore natus
              excepturi error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptas officia nemo exercitationem explicabo, hic eveniet?
              Repellat quidem necessitatibus incidunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              nobis minus soluta laborum ex qui debitis obcaecati, quas nostrum
              neque ut quo dolorum et facilis tempore? In, esse. Fugiat dolor
              cum veniam? Ratione, laborum. Nostrum autem, quam aut, vel, ipsa
              molestias officia accusantium optio qui suscipit porro dolorem
              aliquid consequatur. Atque debitis esse quaerat excepturi suscipit
              fuga, dignissimos totam sequi.
            </p>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlogPage;

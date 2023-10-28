import Image from "next/image";

// Style
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Jojo here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
            officia nulla eaque qui corporis harum fuga ad quasi est quaerat
            expedita eveniet ducimus amet mollitia ipsam, aut beatae tenetur
            labore veritatis adipisci cumque rerum! Neque ex, molestiae earum
            doloremque corrupti blanditiis eligendi illo adipisci, pariatur,
            veritatis maxime iusto molestias reprehenderit.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

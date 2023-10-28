import MenuPosts from "./menuPosts/menuPosts";
import MenuCategories from "./menuCategories/MenuCategories";

// Style
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Top */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* Middle */}
      <h2 className={styles.subtitle}>{"Discover by topics"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* Lower */}
      <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;

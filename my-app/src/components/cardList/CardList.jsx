import Pagination from "../pagination/Pagination";

// Style
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;

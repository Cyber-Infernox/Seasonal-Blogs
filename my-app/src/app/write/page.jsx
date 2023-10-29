"use client";

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

// Style
import styles from "./writePage.module.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Title" />
      <div className={styles.editor}>
        <div className={styles.add}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <>
              <button className={styles.addButton}>
                <Image src="/image.png" alt="" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </>
          )}
        </div>
        <div className={styles.text}>
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;

import React from "react";
import styles from "./ButtonA.module.css";

const ButtonA = () => {
    console.log(styles);
    
    return (
        <button className={styles.button}>
            Button A
        </button>
    );
}

export default ButtonA;
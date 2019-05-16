import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({items}) => (
  <>
  { items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ):(
      <h1 className={styles.noItem}>There is nothing here yet, please press the button and add some items <span role="img">❤️</span> </h1>
    )
  }
  </>
);

export default List;

import React from "react";
import styles from "./App.module.css";
import PermissionSection from "../PermissionSection/PermissionSection";

const App = () => {
  return (
    <div className={styles.App}>
      <PermissionSection/>
    </div>
  );
}

export default App;

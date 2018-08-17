import * as React from "react";
import Logo from "./components/logo";
import ProfileStatus from "./components/profileStatus";
const styles = require("./gnb.scss");

const GNB = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <ProfileStatus />
        </div>
      </div>
    </div>
  );
};

export default GNB;

import * as React from "react";
import { Link } from "react-router-dom";
import Icon from "app/resources/icons";
import PACKS from "app/resources/icons/packs";

const styles = require("./logo.scss");

const LogoIcon = () => {
  return (
    <Link to="/">
      <Icon icon={PACKS.GENERAL.LOGO} className={styles.logo} />
    </Link>
  );
};

export default LogoIcon;

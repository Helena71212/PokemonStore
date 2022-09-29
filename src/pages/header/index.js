import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../router/routeNames";
import {BiCartAlt} from "react-icons/bi"
import{BsFillPersonFill} from "react-icons/bs"

import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.headerTitle} to={ROUTE_NAMES.HOME}>
          PokeMon GO
        </Link>
        <div className={styles.headerAuth}>
          <h1>Footer</h1>
        </div>

        <div className={styles.headerAuth}>
          <div className={styles.personArea}><BsFillPersonFill className={styles.personAreaIcon}/></div>
          <Link className={styles.headerSignIn} to={ROUTE_NAMES.SIGN_IN}>
            Sign In
          </Link>
          {/* <Link className={styles.headerSignUp} to={ROUTE_NAMES.SIGN_UP}>
            Sign Up
          </Link> */}
          <div className={styles.headerCart}><BiCartAlt className={styles.headerCartIcon} />
          <span className= {styles.headerCartTotalPrice}> 5 </span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

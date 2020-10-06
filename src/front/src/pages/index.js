import React from "react";
import { Link } from "gatsby";
import PrimaryLayout from "../layouts/primaryLayout";

import styles from "./index.module.css";
import {Button, Divider} from "antd";

const Home = () => {
  return(
    <PrimaryLayout>
      <h1 className={styles.centered}>The University of Queensland Mountain Club</h1>
      <p className={styles.centered}>UQMC is made up of a bunch of psyched young people that enjoy
adventuring in the outdoors. The club organises a bunch of climbing, hiking, camping and social trips.
UQMC is a volunteer-run organisation which is affiliated with UQ sport. The best thing about the
club is the friends you make; you will meet plenty of people who will help you learn to climb, be your
belay buddy, or go on that hiking trip. Being a part of this community will inspire you to adventure
further and always be a weekend warrior.</p>

      <div className={styles.jumboButtons}>
        <Link to="/covid"><Button type="primary">COVID UPDATES</Button></Link>
        <a target="_blank" rel="noopener noreferrer" href="https://members.uqmc.org/join"><Button type="primary">JOIN US</Button></a>
        <Link to="/events"><Button type="primary">EVENTS AND SIGNUPS</Button></Link>
      </div>

      <Divider><h1 className={styles.centered}>Free Trial</h1></Divider>
      <p className={styles.centered}>
        We understand not everyone knows if they can commit to a semester or year of membership.<br />
        Sign up and get a free two weeks! Swing by Kangaroo Point and get addicted to the stoke.
      </p>
    </PrimaryLayout>
  );
};

export default Home;

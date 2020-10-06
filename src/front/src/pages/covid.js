import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import {Button, Divider, PageHeader} from "antd";

import styles from "./covid.module.css";

const Covid = () => {
  return(
    <PrimaryLayout>
      <PageHeader
        title="COVID's Effect On Club Activities"
        onBack={() => window.history.back()}
      />

      <Divider orientation="left"><h1>Primary Take-Aways</h1></Divider>
      <ul>
        <li>Queensland is currently in stage 3 restrictions, and the club is following a COVID industry plan to
operate;</li>
        <li>COVID has disrupted club activities considerably, at the moment we are only offering KP activities
that include top-roping, lead climbing and skills workshops;</li>
        <li>We are working with UQ sport to try to recommence weekend trips;</li>
        <li>We are a community sports club and therefore are guided by the “get in, train, get out principal” this
is quite a culture shock for the club as we are usually a very social organisation;</li>
        <li>We understand that it is difficult, but we must do our part to stop the spread, and we look forward
to returning to our more social way of running once restriction ease further;</li>
        <li>Under stage 3 restriction, the club cannot run camping or overnight trips;</li>
        <li>Despite this, we encourage you to use the club network to make friends and go on your adventures!</li>
      </ul>

      <Divider orientation="left"><h1>Joining Club Activities In Stage 3</h1></Divider>
      <p>Under stage 3 restriction, we have to have group size limits. So please sign up to activities using the
following links:</p>

      <div className={styles.jumboButtons}>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1MrEBJgBpVEdZhpzYVv0vxQwCLz94XJrSuIkKoXKCFng/edit?usp=sharing"><Button type="primary">TUESDAY TOP-ROPING</Button></a>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1X9YJxznsl4489Syy-UyqpFx5n9fszGJPqryMjp15MqE/edit?usp=sharing"><Button type="primary">THURSDAY LEAD-CLIMBING</Button></a>
      </div>
    </PrimaryLayout>
  );
};

export default Covid;

import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import {Card, Col, PageHeader, Row} from "antd";

import styles from "./the-team.module.css";


const TheTeam = () => {

  let execs = [];
  for(let i = 0; i < 6; i++) {
    execs.push(
      <Col span={7} className={styles.cardCold}><Card
        hoverable
        style={{ width: 200}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Card.Meta title="John Doe" description="Some Title" />
      </Card>
      </Col>
    );
  }

  return (
    <PrimaryLayout>
      <PageHeader
        title="The Team"
        onBack={() => window.history.back()}
      />

      <Row justify="center" className={styles.topMargin}>
        {execs}
      </Row>
    </PrimaryLayout>
  );
};

export default TheTeam;

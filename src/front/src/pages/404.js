import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import { Button } from "antd";
import { Link } from "gatsby";

const FOF = () => {
  return(
    <PrimaryLayout>
      <h1>Page not found!</h1>
      <Link to="/"><Button>Back To Home</Button></Link>
    </PrimaryLayout>
  );
};

export default FOF;

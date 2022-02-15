import React from "react";
import "./base.scss"
import "./HomeScreeen.scss"
import Categories from "../../components/category/Categories";
import { Col, Row } from "react-bootstrap";
import Video from "../../components/Video/Video";
function HomeScreen() {
  return (
    <div className="HomeScreen__main border border-secondary">
      <Categories />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;

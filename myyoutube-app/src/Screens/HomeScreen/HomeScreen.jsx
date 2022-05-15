import React from "react";
import "./base.scss"
import "./HomeScreeen.scss"
import Categories from "../../components/category/Categories";
import { Col, Row } from "react-bootstrap";
import Video from "../../components/Video/Video";
function HomeScreen() {
  return (
    <div className="HomeScreen__main overflow-hidden border border-secondary">
      <Categories />
      <Row style={{gridRowGap:"1rem",overflowY:"scroll",justifyContent:"center",height:"82vh"}}>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4} className="column">
            <Video />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;

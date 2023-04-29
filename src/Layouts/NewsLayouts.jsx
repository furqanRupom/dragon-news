import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayouts = () => {
    return (
        <div className="container">
      <Header />
      <Container className="my-5">
        <Row>
          <Col lg={9}>

            <Outlet />

          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    );
};

export default NewsLayouts;
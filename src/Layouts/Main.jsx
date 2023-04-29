import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import NevigationBar from "../pages/Shared/NevigationBar/NevigationBar";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <NevigationBar />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>

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

export default Main;

import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { RgetGameList } from '../actions';
import LeftSide from "../component/LeftSide"
import RightSide from "../component/RightSide"



export default function VideoGames() {

  return (
    <div>
      <Row>
        <Col xs="12" sm="12" lg="3">
          <LeftSide />
        </Col>
        <Col xs="12" sm="12" lg="9"  >
          <RightSide />
        </Col>
      </Row>
    </div>
  );
}
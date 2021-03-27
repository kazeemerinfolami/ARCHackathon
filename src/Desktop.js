import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import BodyFrame from './components/BodyFrame';
import Content from './components/desktop/Content';
import Content2 from './components/desktop/Content2';


function Desktop() {
    return (
        <BodyFrame>
            <div className="Desktop-Container">
                <div className="Desktop-Wrapper">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <Content />
                            </Col>
                            <Col lg={5}>
                                <Content2 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </BodyFrame>
    )
}

export default Desktop

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from '../Navigation/Navigation';
const layout = (props) => {
    return (
        <Container>
            <Row>
                <Navigation/>
            </Row>
            <main>
                {props.children}
            </main>
        </Container>
    )
}

export default layout;
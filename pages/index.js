import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Row from '../components/Row';

const Title = styled.h1`
  // color: red;
  // font-size: 50px;
`

export default () => (
  <Container>
    <Row color="blue">
      <Title>Cloud chapter</Title>
    </Row>
    <Row color="green">
      <Title>About cloud chapter</Title>
    </Row>

    <Row color="yellow">
      <Title>Next event</Title>
    </Row>

    <Row color="green3">
      <Title>Members</Title>
    </Row>

    <Row color="grey">
      <Title>Showcase</Title>
    </Row>


    <Row color="blueGrey">
      <Title>Contact</Title>
    </Row>

    <Row color="green">
      <Title>Footer</Title>
    </Row>

  </Container>
)

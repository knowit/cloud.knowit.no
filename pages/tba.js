import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Row from '../components/Row';

const Title = styled.div`
  // color: red;
  font-size: 200%;
`
const SubTitle = styled.div`
  // color: red;
  font-size: 90%;
`
const Bold = styled.span`
  font-weight: bold;
`
const Content = styled.div`
  display:flex;
  flex-direction: column;
`


export default () => (
  <Container>
    <Row color="blue">
      <Content>
        <Title><Bold>The Cloud Chapter</Bold></Title>
        <SubTitle>coming soon..</SubTitle>
      </Content>
    </Row>
  </Container>
)

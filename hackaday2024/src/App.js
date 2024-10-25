import React from 'react';
import styled from 'styled-components';
import DetectMobile from './Script/DetectAgent';
import Header from './Components/Header.jsx';
import DesktopDisplay from './Pages/Desktop.jsx';
import AccountList from './Pages/AccountList.jsx';
import { useEffect } from 'react';

const Container = styled.div``;



export default function App() {
  const isMobile = DetectMobile();
  if (isMobile) {
    return (
      <Container>
        <Header />
        <AccountList />
      </Container>
    );
  }
  else{
    return (
      <Container>
        <DesktopDisplay />
      </Container>
    );
  }
}


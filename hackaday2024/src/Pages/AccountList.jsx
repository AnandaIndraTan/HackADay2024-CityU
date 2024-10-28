import React from "react";
import styled from 'styled-components';
import AccountCard from "../Components/AccountCard";
const Container = styled.div``;




export default function AccountList() {
  return (
    <Container className="flex flex-col justify-between overflow scroll">
        <AccountCard appName="Facebook.com" accName="test" password="password"/>
    </Container>
  );
}
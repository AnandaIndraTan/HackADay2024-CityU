import React from "react";
import styled from 'styled-components';


const Container = styled.div``;
const LogoContainer = styled.div``;
const LogoWrapper = styled.div``;
const AccountWrapper = styled.div``;
const Profile = styled.div``;



export default function Header() {
  return (
    <Container className="sticky absolute flex">
        <LogoContainer className="flex">
            <LogoWrapper className="flex">
                This is logo
            </LogoWrapper>
        </LogoContainer>
        <AccountWrapper className="flex">
            <Profile className="flex">
              This is Account
            </Profile>
        </AccountWrapper>
    </Container>
  );
}
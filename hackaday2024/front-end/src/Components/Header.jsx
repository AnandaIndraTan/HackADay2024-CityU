import React from "react";
import styled from 'styled-components';
import avatar from '../Resource/avatar.jpg';


const Container = styled.div``;
const LogoContainer = styled.div``;
const LogoWrapper = styled.div``;
const AccountWrapper = styled.div``;
const Profile = styled.div``;
const PP = styled.img``;



export default function Header() {
  return (
    <Container className="sticky absolute w-full h-15 flex justify-between p-3 px-5 bg-gradient-to-r from-violet via-purple to-pink drop-shadow-xl">
        <LogoContainer className="flex">
            <LogoWrapper className="text-4xl font-bold italic">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-violet ">
                SEERS
              </span>
            </LogoWrapper>
        </LogoContainer>
        <AccountWrapper className="flex">
            <Profile className="flex rounded-full w-10 h-10">
              <PP src={avatar} alt="Profile Picture"  className="rounded-full w-full h-full"/> 
            </Profile>
        </AccountWrapper>
    </Container>
  );
}
import React from "react";
import styled from "styled-components";
import DeviceQRCode from "../Script/DeviceIDEncode";


const Container = styled.div``;
const LogoWrapper = styled.div``;
const ContentWrapper = styled.div``;
const QRCodeWrapper = styled.div``;



export default function DesktopDisplay() {
  return (
    <Container className="flex w-full h-screen items-center justify-center bg-gradient-to-r from-violet via-purple to-pink">
        <ContentWrapper className="flex flex-col items-center justify-center w-[400px] h-[600px] p-10 desktop:w-[400px] desktop:h-[600px] bg-white rounded-xl drop-shadow-2xl">
            <ContentWrapper className="flex flex-col mb-12 bg-white">
                <LogoWrapper className="flex items-center justify-center mb-4">
                    {/* Seers logo */}
                </LogoWrapper>
                <LogoWrapper className="text-4xl font-bold italic">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-violet ">
                        SEERS
                    </span>
                </LogoWrapper>
            </ContentWrapper>
            <QRCodeWrapper>
                <DeviceQRCode />
            </QRCodeWrapper>
       </ContentWrapper>
    </Container>
  );
}
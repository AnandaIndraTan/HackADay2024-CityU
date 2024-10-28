import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';


const Container = styled.div``;
const Card = styled.div`
    box-shadow: 0px 3px 10px rgba(36, 36, 10, 0.3);
`;
const AppName = styled.div`
    font-weight: 500;
`;
const Infobox = styled.div``;

export default function AccountCard ({ onClick, appName, accName, password }) {
    return (
        <Container className="flex justify-center items-center">
            <Card className="flex flex-col w-80 h-40 rounded-lg p-5 m-5">
                <AppName>{appName}</AppName>
                <Infobox className="bg-gray w-10 h-10">

                </Infobox>
            </Card>
        </Container>
    );
};
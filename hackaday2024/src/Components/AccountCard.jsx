import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { UnlockPassButton } from "./Buttons";


const Container = styled.div``;
const Card = styled.div`
    box-shadow: 0px 3px 10px rgba(36, 36, 10, 0.3);
`;
const Label = styled.div`
    font-weight: 500;
`;
const Infobox = styled.div``;
const Infowrapper = styled.div``;
const Info = styled.div``;

export default function AccountCard ({ onClick, appName, accName, password }) {
    return (
        <Container className="flex justify-center items-center">
            <Card className="flex flex-col w-80 h-40 rounded-lg p-4 m-5">
                <Label className="mb-2">{appName}</Label>
                <Infobox className="bg-gray w-full h-full p-5 rounded-md">
                    <Infowrapper className="flex">
                        <Label>
                            Username:
                        </Label>
                        <Info className="font-normal">
                                {accName}
                        </Info>
                    </Infowrapper>
                    <Infowrapper className="flex">
                        <Label>
                            Password:
                        </Label>
                        <Info className="font-normal">
                                {password}
                        </Info>
                    </Infowrapper>
                </Infobox>
                
            </Card>
        </Container>
    );
};
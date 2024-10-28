import React from "react";
import { useState} from "react";
import styled from 'styled-components';
import { UnlockPassButton } from "./Buttons";


const Container = styled.div``;
const Card = styled.div`
    box-shadow: 0px 3px 10px rgba(36, 36, 10, 0.3);
`;
const Label = styled.div`
    font-weight: 500;
`;
const Left = styled.div``;
const Right = styled.div``;
const Infobox = styled.div``;
const Infowrapper = styled.div``;
const Info = styled.div``;

export default function AccountCard ({ onClick, appName, accName}) {
    const [password, setPassword] = useState("••••••••••••••••");
    const [isVerifying, setIsVerifying] = useState(false);

    const handleUnlock = async() => {
        try{
            setIsVerifying(true);
        
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = stream;
            await video.play();

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);

            stream.getTracks().forEach(track => track.stop());

            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
            
            const formData = new FormData();
                formData.append('image', blob);
                
                const verificationResponse = await fetch('/api/verify-face', {
                    method: 'POST',
                    body: formData
                });

                if (!verificationResponse.ok) {
                    throw new Error('Face verification failed');
                }

                const passwordResponse = await fetch(`/api/get-password/${accName}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                

                if (!passwordResponse.ok) {
                    throw new Error('Password retrieval failed');
                }

                const { password: retrievedPassword } = await passwordResponse.json();
                setPassword(retrievedPassword);
        }catch (error) {
            console.error('Verification failed:', error);
            setPassword("••••••••••••••••");
        } finally {
            setIsVerifying(false);
        }

    }

    return (
        <Container className="flex justify-center items-center">
            <Card className="flex flex-col w-80 h-40 rounded-lg p-4 m-5">
                <Label className="mb-2">{appName}</Label>
                <Infobox className="flex justify-between bg-gray w-full h-full p-5 rounded-md">
                    <Left className="flex flex-col justify-between">
                        <Infowrapper className="flex">
                            <Label>
                                Username:
                            </Label>
                            <Info className="font-normal ml-3">
                                    {accName}
                            </Info>
                        </Infowrapper>
                        <Infowrapper className="flex">
                            <Label>
                                Password:
                            </Label>
                            <Info className="flex items-center bg-white px-2 font-normal ml-3">
                                {isVerifying ? 'Verifying...' : password}    
                            </Info>
                        </Infowrapper>
                    </Left>
                    <Right className="flex flex-col items-center justify-center">
                        <UnlockPassButton onClick={handleUnlock} isVerifying={isVerifying}/>
                    </Right>
                </Infobox>
                
            </Card>
        </Container>
    );
};
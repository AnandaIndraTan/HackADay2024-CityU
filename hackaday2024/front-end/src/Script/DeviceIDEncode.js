import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

// First, install required packages:
// npm install react-qr-code crypto-js

const DeviceQRCode = () => {
    const [deviceId, setDeviceId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generateDeviceId();
    }, []);

    const generateDeviceId = async () => {
        const components = [
            navigator.userAgent,
            navigator.language,
            new Date().getTimezoneOffset(),
            Screen.width,
            Screen.height,
            navigator.hardwareConcurrency,
            navigator.deviceMemory,
            navigator.platform
        ].join('|');

        try {
            // Generate hash using Web Crypto API
            const msgBuffer = new TextEncoder().encode(components);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => 
                b.toString(16).padStart(2, '0')
            ).join('');

            setDeviceId(hashHex);
            setLoading(false);
        } catch (error) {
            console.error('Error generating device ID:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>            
            {deviceId && (
                <>
                    <div style={{
                        background: 'white',
                        padding: '16px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                    }}>
                        <QRCode
                            value={deviceId}
                            size={256}
                            level="H"
                        />
                    </div>
                    
                    <div style={{
                        wordBreak: 'break-all',
                        maxWidth: '300px',
                        textAlign: 'center'
                    }}>
                    </div>
                </>
            )}
        </div>
    );
};

export default DeviceQRCode;
import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoPhonePortraitOutline, IoPhonePortraitSharp } from 'react-icons/io5';

export const UnlockPassButton = ({ onClick, isVerifying}) => {
  const [isLocked, setIsLocked] = useState(true);

  const handleClick = () => {
      setIsLocked(!isLocked);
      onClick && onClick();
  };

  return (
      <div className="flex justify-center">
          <button
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl active:scale-95 disabled:opacity-50"
              onClick={handleClick}
              disabled={isVerifying}
          >
              {isVerifying ? (
                  <AiOutlineLoading3Quarters className="text-gray-700 text-xl animate-spin" />
              ) : isLocked ? (
                  <FaLock className="text-gray-700 text-xl" />
              ) : (
                  <FaLockOpen className="text-gray-700 text-xl" />
              )}
          </button>
      </div>
  );
};



export const LinkDeviceButton = ({ onClick, isLinking }) => {
    const [isLinked, setIsLinked] = useState(false);

    const handleClick = async () => {
        try {
            // Request camera permission
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            
            // Stop the stream immediately - we just needed the permission
            stream.getTracks().forEach(track => track.stop());
            
            setIsLinked(!isLinked);
            onClick && onClick();
        } catch (error) {
            console.error('Camera permission denied:', error);
            // Handle permission denial here
        }
    };

    return (
        <div className="flex justify-center">
            <button
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl active:scale-95 disabled:opacity-50"
                onClick={handleClick}
                disabled={isLinking}
            >
                {isLinking ? (
                    <AiOutlineLoading3Quarters className="text-gray-700 text-xl animate-spin" />
                ) : isLinked ? (
                    <IoPhonePortraitSharp className="text-gray-700 text-xl" />
                ) : (
                    <IoPhonePortraitOutline className="text-gray-700 text-xl" />
                )}
            </button>
        </div>
    );
};


export const AddAccountButton = ({ onClick }) => {

};
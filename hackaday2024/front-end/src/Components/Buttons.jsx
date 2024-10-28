import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


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
import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

export const UnlockPassButton = ({ onClick }) => {
  const [isLocked, setIsLocked] = useState(true);

  const handleClick = () => {
    setIsLocked(!isLocked);
    onClick && onClick();
  };

  

  return (
    <div className="fixed bottom-16 left-0 right-0 flex justify-center">
      <button
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl active:scale-95"
        onClick={handleClick}
      >
        {isLocked ? (
          <FaLock className="text-gray-700 text-2xl" />
        ) : (
          <FaLockOpen className="text-gray-700 text-2xl" />
        )}
      </button>
    </div>
  );
};
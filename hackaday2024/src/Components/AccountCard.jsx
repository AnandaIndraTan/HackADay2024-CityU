import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';


export const AccountCard = ({ onClick, appName, accName, password }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 max-w-sm mx-auto mb-4"
        >
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {appName}
                    </h3>
                </div>
                
                <div className="space-y-1">
                    <div className="flex items-center text-gray-600">
                        <span className="font-medium w-24">Account:</span>
                        <span className="truncate">{accName}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                        <span className="font-medium w-24">Password:</span>
                        <span className="truncate">
                            {password ? '••••••••' : 'No password'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
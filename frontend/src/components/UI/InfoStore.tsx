import React from 'react';

interface InfoStoreProps {
    imageUrl: string;
    label: string;
    width?: string;
    height?: string;
}

export const InfoStore: React.FC<InfoStoreProps> = ({ imageUrl="./logo.png", label="Welcome to our store", width="100%", height="auto" }) => {
    return (
        <div className="flex flex-col items-center gap-6" style={{ width, height }}>
            <img 
                src={imageUrl} 
                alt={label}
                className="w-full h-auto object-cover"
            />
            <span className="text-gray-700 text-2xl font-bold">
                {label}
            </span>
        </div>
    );
};

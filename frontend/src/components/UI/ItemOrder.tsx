import React from 'react';

interface ItemOrderProps {
    id: number;
    quantity: number;
    name: string;
    price: number;
    width: string;
}

export const ItemOrder: React.FC<ItemOrderProps> = ({ id, quantity, name, price, width }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-200 gap-5 ${width}`}>
            <div className={`flex flex-row items-center gap-4 mb-2 md:mb-0 ${width}`}>
                <span className={`text-gray-600 ${width}`}>#{id}</span>
                <span className={`text-gray-800 font-medium ${width}`}>{name}</span>
                <span className={`text-gray-600 text-sm ${width} ml-auto`}>{quantity}</span>
                <span className={`text-gray-600 text-sm ${width} ml-auto`}>${price}</span>
            </div>
        </div>
    );
};

import React from 'react';
import { Order } from './Order';

interface ListOrderProps {
    items: {
        orderid: number;
        date: string;
        status: string;
        userid: number;
        onUpdate?: (newStatus: string) => void;
        onDelete?: () => void;
        width?: string;
        height?: string;
        onClick?: () => void;
        details?: any;
    }[];
    maxHeight?: string;
    maxWidth?: string;
    position?: string;
    className?: string;
}

export const ListOrder: React.FC<ListOrderProps> = ({ 
    items,
    maxHeight = "500px",
    maxWidth = "1200px",
    position = "center",
    className = ''
}) => {
    const positionClasses = {
        center: "justify-center items-center",
        left: "justify-start items-start",
        right: "justify-end items-start"
    };

    return (
        <div 
            className={`flex flex-col overflow-y-auto ${positionClasses[position as keyof typeof positionClasses]} ${className}`}
            style={{ maxHeight, maxWidth }}
        >
            <div className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-100 font-bold text-lg">
                <div className='w-[10%]'>Order ID</div>
                <div className='w-[20%]'>Date</div>
                <div className='w-[15%]'>Status</div>
                <div className='w-[10%]'>User ID</div>
                <div className='w-[10%]'></div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
                {items.map((item, index) => (
                    <Order
                        key={index}
                        orderid={item.orderid}
                        date={item.date}
                        status={item.status}
                        userid={item.userid}
                        onUpdate={item.onUpdate}
                        onDelete={item.onDelete}
                        width={item.width}
                        height={item.height}
                        onClick={item.onClick}
                    />
                ))}
            </div>
        </div>
    );
};

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MyButton } from './MyButton';
import { deleteJwtToken, deleteUser, deleteUserChanges } from '../../utils/UserUtils';

interface MenuHeaderProps {
    label: string;
    buttons: {
        name: string;
        path: string;
    }[];
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({ label, buttons }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex bg-[#F56F18] items-center justify-between w-full p-2">
            <h2 className="text-2xl font-bold text-gray-800">{label}</h2>
            
            <div className="flex flex-wrap justify-start flex-1 px-4">
                {/* Left buttons */}
                <div className="flex gap-4 flex-wrap">
                    {buttons.map((button, index) => (
                        <MyButton
                            key={index}
                            name={button.name}
                            onClick={() => {
                                navigate(button.path);
                                if (index === buttons.length - 1) {
                                    deleteUser();
                                    deleteJwtToken();
                                    deleteUserChanges();
                                }
                            }}
                            width="120px"
                            className={`flex-1 ${location.pathname === button.path ? "bg-[#D35400]" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

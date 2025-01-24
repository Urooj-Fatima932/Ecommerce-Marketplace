import React from 'react';
import { CiSearch } from "react-icons/ci";
interface InputProps {
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder = 'Search...', value, onChange }) => {
    return (
       
        <div className="relativ p-1 w-[130px] md:w-[180px] flex items-center bg-bgray gap-3 rounded-2xl">
             <CiSearch size={25} color='Cblack'/>
            <input
                type="text"
                className=" text-sm  bg-transparent w-1/2 outline-none border-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
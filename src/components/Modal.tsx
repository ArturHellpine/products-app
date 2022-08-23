import React, {useContext} from 'react';
import {ModalContext} from "../context/ModalContext";

interface ModalProps {
    children: React.ReactNode,
    title: string,
}

const Modal = ({children, title}: ModalProps) => {
    const {close} = useContext(ModalContext)
    return (
        <>
            <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={close} />
            <div className='w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2'>
                <h1 className='text-2xl text-center mb-2'>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default Modal;
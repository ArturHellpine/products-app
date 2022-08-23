import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import Error from "./Error";

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 18
    }
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const createNewProduct = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if(inputValue.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }
        productData.title = inputValue
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        setInputValue('')
        onCreate(response.data)
    }


    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
            <form onSubmit={createNewProduct}>
                <input
                    onChange={changeValue}
                    value={inputValue}
                    type="text"
                    className='border py-2 px-4 mb-2 w-full outline-0'
                    placeholder='Enter product title'
                />
                {error && <Error error={error}/>}
                <button
                    type='submit'
                    className='py-2 px-4 border bg-yellow-400 hover:text-white'>
                    Create
                </button>
            </form>
    );
};

export default CreateProduct;
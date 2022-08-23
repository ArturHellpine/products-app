import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductItem from "../components/ProductItem";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
    const {loading, error, products, addProduct} = useProducts()
    const {visible, open, close} = useContext(ModalContext)

    const createHandler = (data: IProduct) => {
        close()
        addProduct(data)
    }
    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader />}
            {error && <Error error={error} />}
            {products.map(product =>
                <ProductItem product={product} key={product.id} />
            )}
            {visible &&
                <Modal title='Create new product'>
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            }
            <button onClick={open} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-5 py-1'>
                +
            </button>
        </div>
    );
};

export default ProductsPage;
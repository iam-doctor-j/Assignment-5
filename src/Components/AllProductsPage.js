import React, { useState, useEffect } from 'react';
import DataApi from '../Data/DataApi';
import ProductsList from './ProductsList';

export default function AllProductsPage () {
    const [data, setData] = useState([]);

    useEffect(() => {
        DataApi.getData(res => {
            setData(res.data);
        });
    },[]);
    return(
        <div style={{ marginLeft: 10 }}>
            <h1>
                Products List
            </h1>
            <ProductsList data={ data } />
        </div>
    );
}
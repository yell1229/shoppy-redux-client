import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductList} from '../services/productApi.js';

export default function ProductList() {
    // const [list, setList] = useState([]); // list변경시 실시간 업데이트. 로컬변수
    const dispatch = useDispatch();
    const list = useSelector(state => state.product.productList);

    useEffect(()=>{
        dispatch(getProductList());
    }, []);


    //출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}]]
    const rows = [];
    if(list){
        for(let i=0; i < list.length; i+=3){ // [{0},{1},{2}]  
            rows.push(list.slice(i, i+3));  // [{0},{1},{2}]
        }
    }
    // console.log('rows',rows);
    return (
        <div>
            {   
                rows.map((rowArray, index) => 
                    <div key={index} className='product-list'>
                        {rowArray.map((product) => 
                            <Link key={product.pid} to={`/products/${product.pid}`}>
                                <ProductAvata img={`${product.image}`}/>
                            </Link>
                        )
                        }
                    </div>
                ) 
            }
        </div>
    );
}


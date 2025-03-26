import {setProductList, setProduct, setImgList, setDetailImgList, setSize} from '../features/product/productSlice.js';
import {axiosGet,axiosPost} from './api.js';

export const getProductList = () => async(dispatch) => {
    const url='http://43.200.191.105:9000/product/all';
    const data = null;
    const result = await axiosGet({url,data});
    
    dispatch(setProductList({result}));
}

export const getProduct = (pid) => async(dispatch) =>{
    console.log('pid',pid);
    
    const url = "http://43.200.191.105:9000/product/detail";
    const data = {'pid':pid};

    const result = await axiosPost({url, data});
    const ImgList = result.imgList;
    const detailImgList = result.detailImgList;
    console.log('result',result);
    
    dispatch(setProduct({result}));
    dispatch(setImgList({ImgList}));
    dispatch(setDetailImgList({detailImgList}));

}

export const getSize = (size) => (dispatch) => {
    dispatch(setSize({size}));
}
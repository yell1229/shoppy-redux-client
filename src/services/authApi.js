import { setIsLoggedIn, setIsLogout, setLoginReset } from "../features/auth/authSlice.js";
import {axiosPost} from './api.js';


export const getLoginReset = () => (dispatch) => {
    dispatch(setLoginReset());
}

export const getLogout = () => (dispatch) => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user_id");
    localStorage.clear();
    dispatch(setIsLogout());
}

export const getLogin = (formData) => async (dispatch) => { // 컴포넌트에서 넘어오는 dispatch를 방아야 함.

    const url = 'http://43.200.191.105:9000/member/login';
    const data = formData;

    const loginResult = await axiosPost({url, data});
    const result_rows = loginResult.result_rows;

    if(result_rows) { // 성공
        localStorage.setItem("token", loginResult.token);
        localStorage.setItem("user_id", formData.id);                        
        dispatch(setIsLoggedIn({result_rows})); // 리듀서(슬라이스)의 함수 호출 (체이닝 허용 안됨.)
    }else{
        dispatch(setIsLoggedIn({result_rows}));
    }

}


// 방법 2.
// export const getLogin = (formData) =>  { // 컴포넌트에서 넘어오는 dispatch를 방아야 함.
//     async (dispatch) => {
//         //리액트 ---> 노드서버(express) 데이터 전송 로그인
//         axios
//         .post('http://43.200.191.105:9000/member/login', formData)
//         .then(res => {
//             // console.log('res.data-->', res.data) 
//             if(res.data.result_rows === 1) {
//                 alert("로그인 성공!!");
//                 localStorage.setItem("token", res.data.token);
//                 localStorage.setItem("user_id", formData.id);                        
//                 setIsLoggedIn(true); // 리듀서(슬라이스)의 함수 호출
//                 navigate('/');
//             } else {
//                 alert("로그인 실패!!");
//             }
//         })
//         .catch(error => {
//             alert("로그인 실패!!");
//             console.log(error);
//         });
//     }
     
// }

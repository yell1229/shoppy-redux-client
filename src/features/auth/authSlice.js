import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    isError : false
}

export const authSlice = createSlice({
    name: 'login',
    initialState, // 초기값
    reducers: {
        //로그인 처리에 필요한 함수
        setIsLoggedIn(state, action){ // action : 외부에서 넘어오는 파라미터를 받을 때
            if(action.payload.result_rows){
                state.isLoggedIn = true;
            }else{
                state.isError = true;
            }
           
        },
        setIsLogout(state){
            state.isLoggedIn = false;
        },
        setLoginReset(state){
            state.isError = false;
        }
    },
})


export const { setIsLoggedIn, setIsLogout, setLoginReset } = authSlice.actions

export default authSlice.reducer
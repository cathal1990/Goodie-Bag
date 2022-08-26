import axios from 'axios'
// import { createSlice } from '@reduxjs/toolkit'


// const dispatch = useDispatch();

// const initialState = {
//         data: [],
//     }

// export const candiesSlice = createSlice({
//     name: 'candies',
//     initialState,
//     reducers: {
//         setCandies: (state, action) => {
//             state.data = action
//         }
//     }
// })

// export function setCandies() {
//     return async (dispatch) => {
//         axios.get('api/candies').then(res => dispatch(setCandies(res.data)))
//         .catch(err => console.log(err))
//     }
// }
// setCandies()



const initialState = {
    data: [],
}

const candiesReducer = (state=initialState, action) => {
    async function allCandiesGet() {
        await axios.get('/api/candies')
        .then((res) => {
            state.data = res.data
        })
    }
    allCandiesGet()

    return state;
}

export default candiesReducer
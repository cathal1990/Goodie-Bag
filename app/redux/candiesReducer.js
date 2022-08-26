import axios from 'axios'



const initialState = {
    data: [],
}

async function allCandiesGet() {
    await axios.get('/api/candies')
    .then((res) => {
        initialState.data = res.data
    })
}
allCandiesGet()


const candiesReducer = (state=initialState, action) => {
    return state;
}

export default candiesReducer
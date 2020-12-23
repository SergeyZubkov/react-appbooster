import {createSlice} from '@reduxjs/toolkit'

const initialState = 'RUB'

const BaseCurrencySlice = createSlice({
    name: 'baseCurrency',
    initialState,
    reducers: {
        setBaseCurrency(state, action) {
            return state = action.payload
        }
    }
})

export const {setBaseCurrency} = BaseCurrencySlice.actions

export default BaseCurrencySlice.reducer
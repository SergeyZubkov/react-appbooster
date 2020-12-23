import {configureStore} from '@reduxjs/toolkit'
import baseCurrencySlice from './BaseCurrencySlice'

const store = configureStore({
    reducer: {
        baseCurrency: baseCurrencySlice
    }
})

export default store
import CurrencySelect from "./CurrencySelect"
import {useSelector, useDispatch} from 'react-redux';
import {setBaseCurrency} from './BaseCurrencySlice'

function BaseCurrency() {
    const {baseCurrency} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className='base-currency'>
            Базовая валюта: <CurrencySelect  baseCurrency={baseCurrency} onChange={(newBaseCurrency) => dispatch(setBaseCurrency(newBaseCurrency))}/>
        </div>
    )
}

export default BaseCurrency
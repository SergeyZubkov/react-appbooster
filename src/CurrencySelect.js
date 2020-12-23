import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import {useState} from 'react';
import fullNameCurrencyList from './currencyFullName';

function CurrencySelect({baseCurrency, onChange}) {
    const handleChange = e => {
        const selectedCurrency = e.target.value

        setValue(selectedCurrency)
        onChange(selectedCurrency)
    }
    const [value, setValue] = useState(baseCurrency)
    return (
        <FormControl>

            <Select

                id="currency-select"
                value={value}
                onChange={handleChange}
            >
                {Object.keys(fullNameCurrencyList).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default CurrencySelect
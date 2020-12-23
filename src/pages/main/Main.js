import {useState, useEffect} from 'react'
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'
import fx from 'money'
import './Main.css'
import Row from './Row'
import fullName from '../../currencyFullName'
import {useSelector} from 'react-redux'
// someFunc() {
//     fx.base = "USD";
//       fx.rates = {
//           "EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
//           "GBP" : 0.647710, // etc...
//           "USD" : 1,        // always include the base rate (1:1)
//           /* etc */
//       }
//     const pounds = fx(1.99).from("USD").to("GBP");
//     return pounds
//   }

fx.base = "RUB"

console.log(fx)
function Main() {
    const [rates, setRates] = useState({})
    const {baseCurrency} = useSelector(state => state)

    const today = new Date().setDate(new Date().getDate() - 1)
    const yestuday = new Date().setDate(new Date().getDate() - 2)
    const format = date => new Date(date).toLocaleDateString().split('.').reverse().join('-')
    
    useEffect(
        () => {
            fetch(`https://api.exchangeratesapi.io/history?start_at=${format(yestuday)}&end_at=${format(today)}&base=${baseCurrency}`)
            .then(r => r.json())
            .then(r => setRates(r.rates))
            .catch(err => console.log(err))
        }
    , [baseCurrency])

    const oldValues = rates[format(yestuday)]||{}
    const currentValues = rates[format(today)]||{}

    const rows = Object.keys(currentValues).map(
        currency => ({
            name: currency,
            fullName: fullName[currency],
            value: currentValues[currency],
            diff: oldValues[currency] - currentValues[currency]
        })
    )
    return (
        <>
        <h2>Курс валют к {baseCurrency} </h2>
        <TableContainer component={Paper} className="currency-list">
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                <TableCell width="40" />
                <TableCell width="40">Код</TableCell>
                <TableCell >Валюта</TableCell>
                <TableCell width="80">Курс</TableCell>
                <TableCell width="80">Изменения</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <Row key={row.name} row={row} />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default Main;
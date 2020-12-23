import {Fragment} from 'react'
import {TableRow, TableCell} from '@material-ui/core'
import Flag from 'react-world-flags'

function Row(props) {
    const { row } = props

    return (
        <Fragment>
            <TableRow>
            <TableCell>
                <Flag code={row.name.slice(0,2)} width="30" fallback={ <span className='flag-icon-placeholder'></span> }/>
            </TableCell>
            <TableCell style={{color: '#a7a7a7'}}>
                {row.name}
            </TableCell>
            <TableCell >{row.fullName}</TableCell>
            <TableCell >{(1 / row.value).toFixed(2)}</TableCell>
            <TableCell style={{color: row.diff >= 0 ? 'green' : 'red'}}>{row.diff.toFixed(4)}</TableCell>
            </TableRow>
        </Fragment>
    )
}

export default Row
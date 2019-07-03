import React from 'react';

const Head = ({keys, head}) => {
    const tableHead = head || {}
    return (
        <thead > 
            {
                keys.map(key => <th key={key}> {tableHead[key] || key}</th>)
            }
        </thead>
        )
}

const Row = ({record}) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id} > 
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr>
        )
}

const Table = ({ data, head }) => {
    const keys = Object.keys(data[0])
    return <table>
        <Head keys={keys} head={head} />
        <tbody>
            {
            data.map(record => <Row record={record} />)
            }         
        </tbody>
    </table>
}

export default Table;
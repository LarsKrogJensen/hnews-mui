import React from 'react';
import Paper from '@material-ui/core/Paper';
import {RowMouseEventHandlerParams} from 'react-virtualized';
import {IColumnProps, VirtualizedTable} from "../components/VirtualizedTable";


interface Data {
    id: number,
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number

}

const data: Data[] = [
    {id: -1, dessert: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
    {id: -1, dessert: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
    {id: -1, dessert: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
    {id: -1, dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    {id: -1, dessert: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
];

let id = 0;

function createData(data: Data): Data {
    id += 1;
    return {...data, id};
}

const rows: Data[] = [];

for (let i = 0; i < 200000; i += 1) {
    const randomSelection: Data = data[Math.floor(Math.random() * data.length)];
    rows.push(createData(randomSelection));
}

function ReactVirtualizedTable() {
    const columns: IColumnProps[] = [
        {
            width: 200,
            flexGrow: 1.0,
            label: 'Dessert',
            dataKey: 'dessert',
            numeric: false
        },
        {
            width: 120,
            label: 'Calories (g)',
            dataKey: 'calories',
            numeric: true,
        },
        {
            width: 120,
            label: 'Fat (g)',
            dataKey: 'fat',
            numeric: true,
        },
        {
            width: 120,
            label: 'Carbs (g)',
            dataKey: 'carbs',
            numeric: true,
        },
        {
            width: 120,
            label: 'Protein (g)',
            dataKey: 'protein',
            numeric: true,
        },
    ];
    return (
        <div style={{height: "100%", width: "100%", padding: 16}}>
            <Paper style={{height: "100%", width: "100%"}}>
                <VirtualizedTable
                    onRowClick={(event: RowMouseEventHandlerParams) => console.log(event)}
                    columns={columns}
                    data={rows}
                />
            </Paper>
        </div>
    );
}

export default ReactVirtualizedTable;

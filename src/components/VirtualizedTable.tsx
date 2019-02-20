import React, {ComponentType} from 'react';
import classNames from 'classnames';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {
    AutoSizer,
    Column,
    ColumnProps,
    RowMouseEventHandlerParams,
    SortDirection,
    SortDirectionType,
    Table,
    TableCellProps,
    TableCellRenderer,
    TableHeaderProps
} from 'react-virtualized';

const styles = (theme: Theme) => createStyles({
    table: {
        fontFamily: theme.typography.fontFamily,
    },
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

export interface IColumnProps extends ColumnProps {
    numeric: boolean
}

export interface ITableHeaderProps extends TableHeaderProps {
    columnIndex: number
}

export interface ExternalProps {
    sortBy?: string;
    sortDirection?: SortDirectionType;
    rowHeight?: number,
    headerHeight?: number,
    onRowClick?: (params: RowMouseEventHandlerParams) => void;
    rowClassName?: string,
    columns: IColumnProps[],
    data: any[]
}

class MuiVirtualizedTable extends React.PureComponent<ExternalProps & WithStyles<typeof styles>> {
    static defaultProps = {
        headerHeight: 56,
        rowHeight: 32,
    }

    getRowClassName = ({index}: any) => {
        const {classes, rowClassName, onRowClick} = this.props;

        return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({cellData, columnIndex}: TableCellProps) => {
        const {columns, classes, rowHeight, onRowClick} = this.props;

        return (
            <TableCell
                component="div"
                className={classNames(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{height: rowHeight}}
                align={(columnIndex && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({label, columnIndex, dataKey, sortBy, sortDirection}: ITableHeaderProps) => {
        const {headerHeight, columns, classes} = this.props;
        const direction: any = {
            [SortDirection.ASC]: 'asc',
            [SortDirection.DESC]: 'desc',
        };

        const inner =
            !columns[columnIndex].disableSort && sortDirection != null ? (
                <TableSortLabel active={dataKey === sortBy} direction={direction[sortDirection || 'ASC']}>
                    {label}
                </TableSortLabel>
            ) : (
                label
            );

        return (
            <TableCell
                component="div"
                className={classNames(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{height: headerHeight}}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}>
                {inner}
            </TableCell>
        );
    };

    render() {
        const {classes, columns, data, rowHeight, headerHeight} = this.props;
        return (
            <AutoSizer>
                {({height, width}) => (
                    <Table
                        rowCount={data.length}
                        rowGetter={({index}) => data[index]}
                        className={classes.table}
                        height={height}
                        width={width}
                        headerHeight={headerHeight || 56}
                        rowHeight={rowHeight || 32}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({cellRenderer, className, dataKey, ...other}, index) => {
                            let renderer: TableCellRenderer;
                            if (cellRenderer) {
                                renderer = (cellRendererProps: TableCellProps) =>
                                    this.cellRenderer({
                                        ...cellRendererProps,
                                        cellData: cellRenderer(cellRendererProps),
                                        columnIndex: index,
                                    });
                            } else {
                                renderer = this.cellRenderer;
                            }

                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={headerProps =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classNames(classes.flexContainer, className)}
                                    cellRenderer={renderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}


export const VirtualizedTable: ComponentType<ExternalProps> = withStyles(styles)(MuiVirtualizedTable);
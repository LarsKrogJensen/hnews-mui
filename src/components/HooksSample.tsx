import React, {ComponentType, FC, useState} from 'react';
import {Button, createStyles, withStyles} from "@material-ui/core";
import {WithStyles} from "@material-ui/core/es";
import Delete from "@material-ui/icons/Remove"
import Add from "@material-ui/icons/Add"



interface ExternalProps {
    initial?: number
}

const styles = createStyles({
    plus: {
        marginLeft: 8
    },
    minus: {
        marginLeft: 16
    },
});

type Props = ExternalProps & WithStyles<typeof styles>

const CounterComp: FC<Props> = ({initial = 0, classes}) => {
    // a number
    const [clicks, setClicks] = useState(initial);
    return <>
        <p>Clicks: {clicks}</p>
        <Button className={classes.minus} variant="outlined" onClick={() => setClicks(clicks - 1)}><Delete/></Button>
        <Button className={classes.plus} variant="outlined" onClick={() => setClicks(clicks + 1)}><Add/></Button>
    </>
}

export const Counter: ComponentType<ExternalProps> = withStyles(styles)(CounterComp)
import React, {ComponentType, FC} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {createStyles, Theme, WithStyles, withStyles} from "@material-ui/core";

interface ExternalProps {
    title?: string
}

const styles = ({palette}: Theme) => createStyles({
    appBar: {
        backgroundColor: 'red'
    },
});

type Props = ExternalProps & WithStyles<typeof styles>

const NavBarComp: FC<Props> = ({title = "Offering Manager", classes}) => {
    return (
        <AppBar position="static" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export const NavBar: ComponentType<ExternalProps> = withStyles(styles)(NavBarComp);


import React from "react";
import {Typography} from "@material-ui/core";


export default ({page}: {page: number}) => {
    return (
        <Typography variant="body1">Page {page}</Typography>
    );
}
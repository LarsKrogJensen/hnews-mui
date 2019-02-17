import React from "react";
import {Typography} from "@material-ui/core";

// export default ({page}: {page: number}) => <Typography variant="body1">Page {page}</Typography>

export default ({page}: { page: number }) => {
    return (
        <div style={{padding: 16}}>
            {Array(100).fill(0).map((item, index) =>
                <Typography variant="body2">Page {page} {index}</Typography>
            )}
        </div>
    )

}
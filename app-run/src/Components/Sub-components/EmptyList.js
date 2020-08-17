import React, { Fragment } from 'react';


const EmptyList = () => {

    return (
        <Fragment>
            <ul>
                <li>
                    <Grid container="bool" direction="row" alignItems="center">
                        <Box mr={1}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Box>
                        <Box><Typography variant="subtitle2">Nombre</Typography></Box>
                    </Grid>
                </li>
            </ul>
        </Fragment>
    )
}


export default EmptyList;
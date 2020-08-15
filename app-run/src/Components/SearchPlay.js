import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import EmptySearch from './Sub-components/emptySearch';
import Container from '@material-ui/core/Container';


const useStyle = makeStyles((theme) => ({
    root: {
        height: 47,
    }
}))




const SearchPlay = () => {

    let classes = useStyle();

    return (
        <Fragment>
            <Box my={4}>
                <FormControl fullWidth variant="outlined" classes={classes.margin}> 
                    <Box width="40%" mx="auto">
                        <OutlinedInput
                            classes={{root:classes.root}}
                            fullWidth="bool"
                            placeholder="Buscar"
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            labelWidth={0}
                            />
                    </Box>
                </FormControl>
            </Box>
            <Box mx="auto" width="90%">
                <EmptySearch />
            </Box>
        </Fragment>
    )
}

export default SearchPlay;
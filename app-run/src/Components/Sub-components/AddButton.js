import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';


const AddButton = (props) => {

    return(
        <IconButton color="secondary" aria-label="add song" onClick={props.onClick} component="span">
          <AddCircle fontSize="large"/>
        </IconButton>
    )
}

export default AddButton;
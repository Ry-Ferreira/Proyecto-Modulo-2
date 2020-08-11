import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Probando = () => {
  return(
    <div>
      <Link component="button"
      variant="body3"
      onClick={() => {
        alert("I'm a button.");
      }}>
        Click me!!
      </Link>
      <Button variant="contained" color="secondary">
          Click on me!
      </Button>
    </div>
  )
}

export default Probando;

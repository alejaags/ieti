import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class directory1 extends Component {

    const useStyles = makeStyles(theme => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));

    export default function ContainedButtons() {
      const classes = useStyles();

      return (
        <div className={classes.root}>
          <h1>Directorio Médico</h1>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Red centros médicos
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Profesionales
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Clinicas
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Planes
          </Button>


        </div>
      );
    }
}
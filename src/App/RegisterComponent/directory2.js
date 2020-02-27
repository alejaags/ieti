/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

class directory2 extends Component {

    export default function Playground() {
      const defaultPlan = {
        options: topPlan,
        getOptionLabel: option => option.title,
      };

      const defaultCiudad = {
        options: topCiudad,
        getOptionLabel: option => option.title,
      };

      const defaultEspecialidad = {
        options: topEspecialidad,
        getOptionLabel: option => option.title,
      };

      const defaultNombresP = {
        options: topNombresP,
        getOptionLabel: option => option.title,
      };

      const flatProps = {
        options: topPlan.map(option => option.title),
      };

      const [value, setValue] = React.useState(null);

      return (
        <div style={{ width: 300 }}>
          <Autocomplete
            {...defaultPlan}
            id="Plan"
            debug
            renderInput={params => <TextField {...params} label="Plan" margin="normal" />}
          />
          <Autocomplete
            {...defaultCiudad}
            id="Ciudad"
            disableCloseOnSelect
            renderInput={params => (
              <TextField {...params} label="Ciudad" margin="normal" />
            )}
          />
          <Autocomplete
            {...defaultEspecialidad}
            id="Especialidad"
            clearOnEscape
            renderInput={params => <TextField {...params} label="Especialidad" margin="normal" />}
          />
          <Autocomplete
            {...defaultNombresP}
            id="Nombre prestador"
            clearOnEscape
            renderInput={params => <TextField {...params} label="Nombre prestador" margin="normal" />}
          />
          <br></br>
          <Button variant="contained">Consultar</Button>
        </div>


      );
    }

    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const topPlan = [
      { title: 'Colmedica Zafiro', year: 1994 },
      { title: 'Colsubsidio Plan', year: 1972 },
      { title: 'Seguro de vida Alianza', year: 1974 },
      { title: 'Colmedica Esmeralda', year: 2008 }
    ];

    const topCiudad = [
      { title: 'Bogota', year: 1994 },
      { title: 'Medellin', year: 1972 },
      { title: 'Pereira', year: 1974 },
      { title: "San Andres", year: 1993 },
      { title: 'San Gil', year: 1994 },
      { title: 'Villavicencio', year: 2008 },
      { title: 'Yopal', year: 1957 }
    ];

    const topEspecialidad = [
      { title: 'Acupuntura', year: 1994 },
      { title: 'Medicina General', year: 1972 },
      { title: 'Medicina Familiar', year: 1974 },
      { title: "Pediatria", year: 1993 },
      { title: 'Urgencias generales', year: 1994 },
      { title: 'Urgencias pediatricas', year: 2008 },
      { title: 'Urgencias Psiquiatricas', year: 1957 }
    ];

    const topNombresP = [
      { title: 'Arturo Moreno', year: 1994 },
      { title: 'Juanito Perez', year: 1972 },
      { title: 'Alejandro Gutierrrez', year: 1974 }
    ];
}
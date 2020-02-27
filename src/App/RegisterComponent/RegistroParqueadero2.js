import React from 'react';
import './Register.css';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input } from '@material-ui/core';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Switch from '@material-ui/core/Switch';

export class RegistroParqueadero2 extends React.Component{
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper" style={{margin: '0 auto', width:"20%"}}>
						<Typography variant="headline">Registro Parqueadero</Typography>
                        <Avatar className="avatar" style={{margin: '0 auto'}}>
                            <FaceRoundedIcon />
                        </Avatar>
                        <Typography variant="headline">Informacion del Dueño</Typography>
                        <form className="form">
                       
							
							<FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Nombres</InputLabel>
                                <Input id="email" name="email" autoComplete="nombres" autoFocus />
                            </FormControl>
                            <br />
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Apellidos</InputLabel>
                                <Input id="email" name="email" autoComplete="apellidos" autoFocus />
                            </FormControl>
                            <br />
							
							<FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Barrio</InputLabel>
                                <Input id="social" name="email" autoComplete="barrio" autoFocus />
                            </FormControl>
                            <br />
							
							<FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Ciudad</InputLabel>
                                <Input id="email" name="email" autoComplete="ciudad" autoFocus />
                            </FormControl>
                            <br />
							
                            <FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Colonia</InputLabel>
                                <Input id="email" name="email" autoComplete="colonia" autoFocus />
                            </FormControl>
                            <br />
								
							<FormControl margin="normal" required>
                                <InputLabel htmlFor="email">Direccion</InputLabel>
                                <Input id="email" name="email" autoComplete="direccion" autoFocus />
                            </FormControl>

							<FormControl margin="normal" required>
								<div >
									<Button type="submit" variant="raised" color="primary" className="submit" href="parqueadero">
										Anterior
									</Button>								
									<Button type="submit" variant="raised" color="primary" className="submit">
										Siguiente
									</Button>									
								</div >
							 </FormControl>
                             <br />
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}
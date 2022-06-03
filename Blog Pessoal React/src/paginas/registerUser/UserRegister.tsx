import React from 'react';
import {Grid, Box, Typography,TextField,Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


function UserRegister(){
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}>Cadastrar</Typography>
                        
                        <TextField 
                        id='nome' label='nome' variant ='outlined' name='nome' margin='normal' fullWidth />
                        <TextField 
                        id='email' label='email' variant ='outlined' name='email' margin='normal' type='email' fullWidth/>
                        <TextField 
                        id='senha' label='senha' variant ='outlined' name='senha' margin='normal' type='email' fullWidth/>
                        <TextField 
                        id='foto' label='foto' variant ='outlined' name='foto' margin='normal' fullWidth/>
                        
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-nome'>
                                <Button type ='submit' variant='contained' style={{ borderColor: "black", backgroundColor: "#F5ED30", color: "#000000" }}>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Link to='/Login' className='text-decorator-nome2'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight:'bold'}}>Cancelar</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid> 

            <Grid xs={6} style={{
                background: `url(https://imgur.com/MesYHGC.jpeg)`,
                backgroundRepeat:'no-repeat', width: '130vh' , minHeight: '100vh' , backgroundSize: 'cover' , backgroundPosition:'center'
            }}> 
            </Grid>
        </Grid>
    );
}

export default UserRegister;
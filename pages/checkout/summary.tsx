import NextLink from 'next/link';
import { Grid, Typography, Card, CardContent, Divider, Box, Button, Link } from '@mui/material';


import { CardList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts'

const SummaryPage = () => {
  return (

    <ShopLayout title='Resumen de orden' pageDescription='Resumen de orden' >

        <Typography variant='h1' component='h1'>Resumen de orden</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CardList />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2' >Resumen (3 productos)</Typography>
                        <Divider sx={{my:1}} />


                        <Box display='flex' justifyContent='space-between' >
                            <Typography variant='subtitle1'>Dirección de Entrega</Typography>

                            <NextLink href='/checkout/addres' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>



                        <Typography>Mateo Ortiz</Typography>
                        <Typography>323 Algún lugar</Typography>
                        <Typography>Fátima, Medellín</Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+57 5436546575</Typography>

                        <Divider sx={{my:1}}/>
                        <Box display='flex' justifyContent='end' >
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>


                        <OrderSummary/> 

                        <Box sx={{mt:3}}>
                            <Button color='secondary' className='circular-btn' fullWidth >
                                Confirmar Orden
                            </Button>
                        </Box>


                    </CardContent>
                </Card>
            </Grid>

        </Grid>

    </ShopLayout>



  )
}

export default SummaryPage
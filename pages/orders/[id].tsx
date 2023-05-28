import NextLink from 'next/link';
import { Grid, Typography, Card, CardContent, Divider, Box, Button, Link, Chip } from '@mui/material';


import { CardList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (

    <ShopLayout title='Resumen de la orden 432425' pageDescription='Resumen de orden' >

        <Typography variant='h1' component='h1'>Orden: ABC123</Typography>

        {/* <Chip
            sx={{my:2}}
            label='Pendiente de Pago'
            variant='outlined'
            color='error'
            icon={<CreditCardOffOutlined/>}
        /> */}

        <Chip
            sx={{my:2}}
            label='Orden Pagada'
            variant='outlined'
            color='success'
            icon={<CreditScoreOutlined/>}
        />

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
                            {/* <Button color='secondary' className='circular-btn' fullWidth >
                                Confirmar Orden
                            </Button> */}
                            {/* TODO */}
                            <h1>Pagar</h1>

                            <Chip
                                sx={{my:2}}
                                label='Orden Pagada'
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined/>}
                            />

                        </Box>


                    </CardContent>
                </Card>
            </Grid>

        </Grid>

    </ShopLayout>



  )
}

export default OrderPage
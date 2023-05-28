import { CardList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts'
import { Grid, Typography, Card, CardContent, Divider, Box, Button } from '@mui/material';
import React from 'react'

const CartPage = () => {
  return (

    <ShopLayout title='carrito - 3' pageDescription='Carrito de Compras de la tienda' >

        <Typography variant='h1' component='h1'>Carrito</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CardList editable/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2' >Orden</Typography>
                        <Divider sx={{my:1}} />

                        <OrderSummary/>

                        <Box sx={{mt:3}}>
                            <Button color='secondary' className='circular-btn' fullWidth >
                                Checkout
                            </Button>
                        </Box>


                    </CardContent>
                </Card>
            </Grid>

        </Grid>

    </ShopLayout>



  )
}

export default CartPage
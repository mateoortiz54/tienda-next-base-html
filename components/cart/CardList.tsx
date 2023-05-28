import { initialData } from "@/database/products"
import { Grid, Typography, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { ItemCounter } from "../ui";



const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]



interface Props {
    editable?: boolean;
}


export const CardList = ({editable=false}:Props) => {
  return (
    <>
        {
            productsInCart.map(product => (
            
                <Grid container spacing={2} key={product.slug} sx={{mb:1}}>
                    <Grid item xs={3}>
                        {/* TODO: llevar a la página del producto */}
                        <NextLink href='/product/slug' passHref legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia 
                                        image={`/products/${product.images[0]}`}
                                        component='img'
                                        sx={{borderRadius:'5px'}}
                                    />

                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant="body1" >{product.title}</Typography>
                            <Typography variant="body1" >Talla: <strong>M</strong></Typography>

                            {
                                editable 
                                ? <ItemCounter/>
                                : <Typography variant="h4">3 Items</Typography>
                                
                            }

                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant="subtitle1">${product.price}</Typography>

                        {
                            editable && ( 
                                <Button variant="text" color="secondary" >
                                    Remover
                                </Button>
                            )

                        }

                    </Grid>

                </Grid>


                // <Typography key={product.slug}>{product.title}</Typography>
                
            ))
        }
    
    </>
  )
}

import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material';
import React, { useMemo, useState } from 'react'

import NextLink from 'next/link'

interface Props {
    product : IProduct;
}

export const ProductCard = ({product}:Props) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(()=>{
      return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])


  return (
    <Grid item 
      xs={4} 
      sm={4}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
        <Card>
        <NextLink href='/product/slug' passHref legacyBehavior prefetch={false}>
            <Link>
              <CardActionArea>
                <CardMedia 
                    component='img'
                    className='fadeIn'
                    image={productImage}
                    alt={product.title}
                    // onLoad={}
                />
              </CardActionArea>
              
            </Link>
          </NextLink>
        </Card>

        <Box
          sx={{mt: 1}}
          className='fadeIn'
        >
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${product.price}</Typography>
        </Box>

    </Grid>
  )
}

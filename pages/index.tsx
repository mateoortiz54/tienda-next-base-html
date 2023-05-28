import {Card, CardActionArea, CardMedia, Grid, Typography} from '@mui/material'

import { ShopLayout } from '@/components/layouts'
import { initialData } from '@/database/products'
import { ProductList } from '@/components/products'



export default function HomePage() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'} >
        <Typography variant='h1' component='h1'>
          Tienda
        </Typography>
        <Typography variant='h2' sx={{mb:1}} component='h1'>
          Todos los Productos
        </Typography>
       
       <ProductList 
          products={initialData.products as any} 
        />

    </ShopLayout>
  )
}

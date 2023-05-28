import { ShopLayout } from "@/components/layouts"
import { Chip, Grid, Typography, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import NextLink from 'next/link';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información sobre el estado de pago',
        width: 200,
        renderCell: (params: GridRenderCellParams ) => {
            return (
                params.row.paid
                ? <Chip color="success" label='Pagada' variant="outlined" />    
                : <Chip color="error" label='No Pagada' variant="outlined" />    
            )
        }

    },
    {
        field: 'link',
        headerName: 'Link',
        description: 'Seguir el link para más información sobre el pedido',
        sortable: false,
        width: 200,
        renderCell: (params: GridRenderCellParams ) => (
                <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
                    <Link underline="always">
                        Más información...
                    </Link>
                </NextLink>
            )

    },

];
  
const rows = [
    { id: 1, paid: false, fullname: 'Mateo Ortiz' },
    { id: 2, paid: true, fullname: 'Andres Felipe' },
    { id: 3, paid: true, fullname: 'Cristian Arboleda' },
    { id: 4, paid: false, fullname: 'Sebastian Pertuz' },
    { id: 5, paid: true, fullname: 'Johan quienSabeQue' },
    { id: 6, paid: false, fullname: 'Blenck Martinez' }

];
  


const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del cliente"} >

        <Typography variant="h1" component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height: 650, width: '100%'}}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    initialState={{
                    pagination: { 
                        paginationModel: { pageSize: 5 } 
                    },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    
                />

            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default HistoryPage
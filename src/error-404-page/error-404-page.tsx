import { Grid, Typography } from '@mui/material'

/**
 * Renders a 404 error
 * @see root.tsx
 */
export default function Error404Page(): JSX.Element {

    return <Grid container style={{ minHeight: 100 }} alignItems='center' justifyContent='center'>
        <Grid item style={{ textAlign: 'center' }}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='subtitle1'>PAGE NOT FOUND</Typography>
        </Grid>
    </Grid>;
}


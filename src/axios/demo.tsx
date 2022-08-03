import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import useAxios from "axios-hooks";

export default function DemoAxios() {

    const [result] = useAxios<{
        id: number,
        name: string,
        height: number,
        weight: number
    }>('https://pokeapi.co/api/v2/pokemon/ditto');



    return <>

        {
            !result.loading && result.data
                ? <Card>
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {result.data.name}
                        </Typography>
                        <Typography>Id: {result.data.id}</Typography>
                        <Typography>Height: {result.data.height}</Typography>
                        <Typography>Weight: {result.data.weight}</Typography>
                    </CardContent>
                </Card>
                : <Skeleton />
        }

        <pre style={{ padding: 20}}>
            { 
    `   const [result] = useAxios<{ 
        id: number,
        name: string,
        height: number,
        weight: number
    }>('https://pokeapi.co/api/v2/pokemon/ditto');` }
        </pre>
    </>
}
import { Button, Container, Paper, Typography } from "@mui/material";
import Heading from "../common/heading/heading";
import DemoAxios from "./demo";

import image from './logo.svg';

export default function AxiosPage() {
    

    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='Axios'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://axios-http.com/' target='_blank'>Axios</Button>
                    <Button color='primary' variant='contained' href='https://github.com/simoneb/axios-hooks' target='_blank'>Axios Hooks</Button>
                    <Button color='primary' variant='contained' href='https://github.com/axios/axios' target='_blank'>Github</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to 
                use library in a small package with a very extensible interface.
            </Typography>
        </Heading>

        <br />
        <br />

        <Paper>
            <DemoAxios />
        </Paper>
    </Container>;
}
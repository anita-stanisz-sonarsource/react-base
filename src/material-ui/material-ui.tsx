import { Button, Container, Typography } from '@mui/material';
import Heading from '../common/heading/heading';

import image from './material-ui.png';

export default function MaterialUi() {

    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='Material UI'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://mui.com/' target='_blank'>Material UI</Button>
                    <Button color='primary' variant='contained' href='https://mui.com/material-ui/getting-started/overview/' target='_blank'>Mui Components</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI,
                our fully-loaded component library, or bring your own design system to our production-ready components.
            </Typography>
        </Heading>
    </Container>;
}
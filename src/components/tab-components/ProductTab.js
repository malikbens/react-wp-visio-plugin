import { Container, Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const { Component, render } = wp.element;
import ProductChoice from "./product-components/ProductChoice";

export class ProductTab extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <Container  sx={{width:'730px'}}>
                <Typography
                    variant="h1"
                    color="text"
                    align="left"
                >
                    5.  Le forfait le plus adapté à votre dépannage en visio est 
                </Typography>
                <ProductChoice values={this.props.values} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ mt: 5, color: 'black' }} onClick={this.back}  >
                        Retour
                    </Button>
                    <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={this.continue} endIcon={<ArrowForwardIcon />}  >
                        Continuer
                    </Button>
                </Box>
            </Container>
        )
    }
}

export default ProductTab
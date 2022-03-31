import { Typography, Box } from "@mui/material";

const { Component, render } = wp.element;

export default class InfoTab extends Component {
    render() {
        return (
            <Box sx={{ width: "730px" }}>
                <Typography
                    variant="h1"
                    align="left"
                    color='text'
                >
                    4. Quelques informations utiles pour votre réparateur
                </Typography>
                <Typography
                    variant="h2"
                    align="left"
                    color="primary"
                >
                    Quel âge a votre appareil ? 
                </Typography>
            </Box>
        )
    }
}

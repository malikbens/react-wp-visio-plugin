import { List, Typography, Box, Button, TextField, ListItemText, Container } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const { Component, render } = wp.element;

export default class InfoTab extends Component {
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
            <Container sx={{ width: "730px" }}>
                <Typography
                    variant="h1"
                    color="text"
                    align="left"
                >
                    3. Donnez plus de détails...
                </Typography>
                <Typography
                    variant="h2"
                    color="primary"
                    align="left"
                >
                    Plus nous aurons de détails, mieux nous pourrons vous aider à réparer. Voici quelques exemples :
                </Typography>
                <List sx={{ listStyle: 'initial' }}>
                    <ListItemText sx={{ display: 'list-item' }} >Précisez la référence de l’appareil mis en cause,</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }} >Les problèmes rencontrés et les pièces mises en cause,</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }} >Ce que vous avez éventuellement déjà effectué comme manipulation pour essayer de dépanner votre appareil </ListItemText>
                </List>

                <TextField
                    id="outlined-multiline-static"
                    label="Quand j'essaye d'allumer mon appareil ..."
                    defaultValue={this.props.values.prbDesc}
                    multiline
                    rows={4}
                    fullWidth
                    onChange={this.props.handleChange("prbDesc")}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ mt: 5, color: "black" }} onClick={this.back}   >
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

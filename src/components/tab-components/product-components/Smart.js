import { Typography, List, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Smart() {
    return (<>
        <Typography
            variant='h2'
            color="text"
        >
         Forfait Smart 
        
        </Typography>
        <Box sx={{background:"#8CBE22", color:"white",padding:'15px 25px 15px 25px' }}>   
            <Typography>
                Ce forfait comprend :
            </Typography>
            <List sx={{ listStyle: 'initial' }}>
                <ListItemText sx={{ display: 'list-item' }} >Appel visio de 20 minutes avec un technicien expert</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Paiement sécurisé</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Annulation possible 2h avant le jour J</ListItemText>
            </List>
        </Box>

        <Typography
            variant='h2'
            color="primary"
            align='left'
        >
            Les avantages
        </Typography>

        <Box > 
            <List sx={{ listStyle: 'initial' }}>
                <ListItemText sx={{ display: 'list-item' }} >Un tarif compétitif pour vous aider à débloquer la situation en 20 minutes </ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Des techniciens d'expérience disponibles en moins de 24H</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Un large choix de créneau pour s’adapter à votre emploi du temps</ListItemText>
            </List>
        </Box>

        <Box sx={{border:"solid 1px #C4C4C4", padding:'15px 25px 15px 25px'}}>
            <Typography
                variant='h2'
                color="primary"
                align='left'
            >
                Remarque
            </Typography>
            <Typography 
                variant='body1'
                color="text"
            >
            Ce forfait de 20 minutes de visio avec un technicien est parfaitement adapté si vous avez une simple 
            question technique ou besoin d’une confirmation de diagnostic. Si vous souhaitez être accompagné pour réparer votre appareil, 
            nous vous conseillons le forfait premium qui comprend :
            </Typography>
            <List sx={{ listStyle: 'initial', marginRight : '3%' }}>
                <ListItemText sx={{ display: 'list-item' }} >Un appel illimité avec notre expert</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Garantie diagnostiqué ou remboursé</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Un suivi personnalisé par email après la visio</ListItemText>
            </List>
        </Box>
    </>
    )
}

import { Typography, List, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React ,{useState, useEffect} from 'react'
import test from '/src/test.js'

export default function Premium() {
    return (<>
        <Typography
            variant='h2'
            color="text"
        >
         FORFAIT PREMIUM 
        
        </Typography>
        <Box sx={{background:"#8CBE22", color:"white" }}>   
            <Typography>
                Ce forfait comprend :
            </Typography>
            <List sx={{ listStyle: 'initial' }}>
                <ListItemText sx={{ display: 'list-item' }} >Appel visio en illimité avec un technicien expert</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Satisfait ou remboursé si la panne n'est pas trouvée</ListItemText>
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
                <ListItemText sx={{ display: 'list-item' }} >Un forfait fixe quel que soit la durée de l’intervention </ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Des techniciens d'expérience disponibles immédiatement en moins de 24H</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Un large choix de créneau pour s’adapter à votre emploi du temps</ListItemText>
                <ListItemText sx={{ display: 'list-item' }} >Vous ne prenez pas de risque : c'est diagnostiqué ou remboursé</ListItemText>
            </List>
        </Box>

        <Box sx={{border:"solid 1px #C4C4C4"}}>
            <Typography
                variant='h2'
                color="primary"
                align='left'
            >
                Bon à savoir
            </Typography>
            <Typography 
                variant='body1'
                color="text"
            >
            Prévoyez au minimum 40 minutes dans votre agenda, c’est la durée d’intervention moyenne de nos techniciens en visio...
            </Typography>
        </Box>
    </>
    )
}

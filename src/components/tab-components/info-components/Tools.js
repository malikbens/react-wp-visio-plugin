import { Grid, Box } from '@mui/material'
import React from 'react'
import cleCliquet from '/public/imgs/tools/cle-cliquet.svg'
import gant from '/public/imgs/tools/gant.svg'
import lampe from '/public/imgs/tools/lampe.svg'
import multimetre from '/public/imgs/tools/multimetre.svg'
import pinceBec from '/public/imgs/tools/pince-bec.svg'
import pinceCoupante from '/public/imgs/tools/pince-coupante.svg'
import pinceMultiprise from '/public/imgs/tools/pince-multiprise.svg'
import scotch from '/public/imgs/tools/scotch.svg'
import tournevisCruciforme from '/public/imgs/tools/tournevis-cruciforme.svg'
import tounevisPlat from '/public/imgs/tools/tournevis-plat.svg'
import tounevisTorx from '/public/imgs/tools/tournevis-torx.svg'
import visseuse from '/public/imgs/tools/visseuse.svg'

const tools = [cleCliquet,gant,lampe,multimetre,pinceBec,pinceCoupante,pinceMultiprise, scotch, tounevisPlat, tounevisTorx, visseuse, tournevisCruciforme]

export default function Tools() { 
    return (
        <Box>
            <Grid container>
                {tools.map(tool => (
                    <Grid item sx={{width:100, mr:2,mb:2}} >
                        <img  src={tool} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

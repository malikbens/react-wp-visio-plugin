import * as React from 'react';
import useState from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Button } from '@mui/material';
import Login from './lr-components/Login';
import Register from './lr-components/Register';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {

    const [username, setUsername] = React.useState('')
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [serverMessage, setServerMessage] = React.useState(false)
    const [value, setValue] = React.useState(0);

    const continuer = e => {
        e.preventDefault();
        props.nextStep()
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ width: '730px' }}>
            <Box >
                <Typography
                    variant='h1'
                    align='left'
                    color='text'
                >
                    6. Mon compte
                </Typography>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ border: "solid 1px #C4C4C4" }} label="PAS ENCORE CLIENT ?" {...a11yProps(0)} />
                    <Tab sx={{ border: "solid 1px #C4C4C4" }} label="Déjà client ?" {...a11yProps(1)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Register />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} serverMessage={serverMessage} setServerMessage={setServerMessage} nextStep={props.nextStep}/>
                </TabPanel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button sx={{ mt: 5, color: 'black' }} onClick={back}  >
                    Retour
                </Button>
                <Button sx={{ mt: 5, ml: 3 }} variant="contained" onClick={continuer} endIcon={<ArrowForwardIcon />}  >
                    Continuer
                </Button>
            </Box>
        </Container>
    );
}
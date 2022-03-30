import { TextField } from "@mui/material"

function modelInput(props){
    if(props.values.device != ""){
        return(
            <TextField onChange={props.handleChange('model')}  label="Modèle" sx={{ minWidth: 120 , margin:'10px 10px 10px 0px'}} />
        )
    }return <></>
}

export default modelInput


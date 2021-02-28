import './Fab.scss'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function FabB(props){
    return(
        <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    );
    
}


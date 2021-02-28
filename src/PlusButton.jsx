import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import './PlusButton.scss';


export default function PlusButton(props){
    return(
        <div className="PlusButton">
            <Button>
            <MoreVertIcon style={{ color: blue[50] }} />
            </Button>
        </div>
        
    );
    
}
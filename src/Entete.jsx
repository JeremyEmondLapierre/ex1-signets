import './Entete.scss'
import { Avatar } from '@material-ui/core';

export default function Entete(props){
    return(
        <header>
            <div className="nomSite">Signets (Beta)</div>
            <div className="headerDroit">
            <p>Prénom Nom</p>
            <Avatar alt="Image Utilisateur" className="avatar"></Avatar>
            </div>
            
        </header>
    );
}
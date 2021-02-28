import './Signet.scss';
import SortButton from './SortButton';
import PlusButton from './PlusButton';
export default function Signet(props){
    return(
        <li className="Signet" style={{backgroundColor: props.couleur}}>
            <div className="BoutonHautGauche">
                <SortButton />
            </div>
            <img src={'images-signets/' + props.id + '.png'} alt={props.titre}/>
            <div className="info">
                <h2 className = "titre">{props.titre}</h2>
                <p className="dateModif">Modifié le : {props.dateModif}</p>
                <PlusButton />
            </div>
        </li>
    );
    
}
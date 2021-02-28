import './ListeSignets.scss'
import Signet from './Signet';
import tabSignets from './data/signets.json';

export default function ListeSignets(props){


    return(
        <div className = "ListeSignets">

        <ul className="ul-signets">
            {
                tabSignets.map(unSign => <Signet  key={unSign.id} titre={unSign.titre} couleur={unSign.couleur} id={unSign.id} dateModif={unSign.dateModif} />)
            }
        </ul>
        </div>
    );
}
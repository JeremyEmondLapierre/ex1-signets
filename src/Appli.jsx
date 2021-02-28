import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import FabB from './Fab';

export default function Appli() {
  return (
    
    <div className="Appli">
      <Entete/>
      <section className="conteneurPrincipal">
        <ListeSignets />
      </section>
      <div className="FabButton">
        <FabB />
      </div>
      
    </div>
  );
}

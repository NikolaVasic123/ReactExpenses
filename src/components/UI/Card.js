import "./Card.css";

//Card predstavlja komponentu koja se cesto koristi kao kontejner koji ima odredjena css svojstva koja 
// vise puta upotrebljavamo....... u ovom slucaju border radius i shadow.......

function Card(props) {
    const clases = 'card ' + props.className; 
    //dodavanje css stila card stilu koji je preuzet iz diva koji smo zamenili sa Card

    return <div className={clases}>{props.children}</div> ;
}

    export default Card;

import deck_img from '../../assets/home/deck_monsterdex.png';
import './DeckItem.css'

console.log(deck_img);

const DeckItem = () => {
    return(
        <div className='deck-item bg-primary-100-opacity-300'>
            <img className="deck-img" src={deck_img}/>
            <p>Branded despia</p>
        </div>
    );
}

export default DeckItem;
import DeckItem from './DeckItem';
import './FavoriteDecks.css'

const FavoriteDecks = () => {
    return(
        <section className='favorite-decks'>
            <div className='component__header'>
                <h2>Favorite Decks</h2>
                <div className='component__headerBorder'></div>
            </div>
            <div className='favorite-decks__container bg-primary-400-opacity-200'>
                <div className='favorite-decks__containerGrid'>
                    <DeckItem />
                    <DeckItem />
                    <DeckItem />
                    <DeckItem />
                    <DeckItem />
                    <DeckItem />
                </div>
            </div>
        </section>
    );
}

export default FavoriteDecks;
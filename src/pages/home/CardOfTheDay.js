import { useEffect } from 'react';
import {ReactComponent as LevelIcon} from '../../assets/card/level.svg'
import {ReactComponent as AttributeIconDark} from '../../assets/card/dark.svg'
import RaceIconFairy from '../../assets/card/Fairy.png'
import AtkIcon from '../../assets/card/atk.png'
import DefIcon from '../../assets/card/def .png'
import './CardOfTheDay.css'
import data from '../../system/database/all_cards_db.json'

const API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"

const searchCard = async (name) => {
    const response = await fetch(`${API_URL}name=${name}`);
    const data = await response.json();
}

const decodeTalker = {"data":[{"id":1861630,"name":"Decode Talker","type":"Link Monster","frameType":"link","desc":"2+ Effect Monsters\r\nGains 500 ATK for each monster it points to. When your opponent activates a card or effect that targets a card(s) you control (Quick Effect): You can Tribute 1 monster this card points to; negate the activation, and if you do, destroy that card.","atk":2300,"race":"Cyberse","attribute":"DARK","archetype":"Code Talker","linkval":3,"linkmarkers":["Top","Bottom-Left","Bottom-Right"],"card_sets":[{"set_name":"Duel Devastator","set_code":"DUDE-EN023","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"1.54"},{"set_name":"Duel Power","set_code":"DUPO-EN106","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"1.56"},{"set_name":"OTS Tournament Pack 6","set_code":"OP06-EN001","set_rarity":"Ultimate Rare","set_rarity_code":"(UtR)","set_price":"24.91"},{"set_name":"Star Pack VRAINS","set_code":"SP18-EN031","set_rarity":"Starfoil","set_rarity_code":"","set_price":"0"},{"set_name":"Star Pack VRAINS","set_code":"SP18-EN031","set_rarity":"Starfoil Rare","set_rarity_code":"(SFR)","set_price":"2.34"},{"set_name":"Starter Deck: Codebreaker","set_code":"YS18-EN043","set_rarity":"Common","set_rarity_code":"(C)","set_price":"0.85"},{"set_name":"Starter Deck: Link Strike","set_code":"YS17-EN041","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"1.47"}],"card_images":[{"id":1861630,"image_url":"https://images.ygoprodeck.com/images/cards/1861630.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/1861630.jpg","image_url_cropped":"https://images.ygoprodeck.com/images/cards_cropped/1861630.jpg"},{"id":1861629,"image_url":"https://images.ygoprodeck.com/images/cards/1861629.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/1861629.jpg","image_url_cropped":"https://images.ygoprodeck.com/images/cards_cropped/1861629.jpg"}],"card_prices":[{"cardmarket_price":"0.12","tcgplayer_price":"0.17","ebay_price":"0.99","amazon_price":"0.25","coolstuffinc_price":"23.99"}]}]}

const Card = data._default["1"]

const CardImg = () => {
    return(
        <div className='img__container item bg-primary-100-opacity-300'>
            <img className="img_containerImg" src="https://images.ygoprodeck.com/images/cards_small/1861630.jpg" alt={Card.name.en} />
        </div>
    );
}

const CardInfo = () => {
    return(
        <div className='card-info'>
            <div className='card-info__container inline-container item bg-primary-100-opacity-300'>
                <p>
                    {Card.name.en}
                </p>
            </div>
            <div className='card-info__container inline-container item bg-primary-100-opacity-300'>
                <img src={RaceIconFairy} />
                <p>{Card.race.en} - {Card.type.en}</p> 
            </div>
            <div className='card-info__container item bg-primary-100-opacity-300'>
                <AttributeIconDark />
                <p>
                    {Card.attribute.en}
                </p> 
            </div>
            <div className='card-info__container item bg-primary-100-opacity-300'>
                <LevelIcon />
                <p>{Card.level}</p>
            </div>
            <div className='card-info__container item bg-primary-100-opacity-300'>
                <img src={AtkIcon} />
                <p>{Card.atk}</p>
            </div>
            <div className='card-info__container item bg-primary-100-opacity-300'>
                <img src={DefIcon} />
                <p>{Card.atk}</p>
            </div>
        </div>
    );
}

const CardDesc = () => {
    return(
        <div className='card-desc'>
            <div className='card-desc__container item bg-primary-100-opacity-300'>
                <p>
                    {Card.desc.en} dqapokdfq qpodkqp pqosdp qdopqksd qksd pqoksdp oqsppd psqod poqsdpqs dpqsd poqdpod qpsd pqsodp dsqod pqsodpo qdokdqsod podpqodq psdp osdpq osdpqpodqodpokrfff,fpqpdo posdkqfpoqdp pd pqfpqfp zpofpoqps spdo
                </p>
            </div>
        </div>
    );
}

const CardOfTheDay = () => {
    return(
        <section className='card-of-the-day'>
            <div className='card-of-the-day__header component__header'>
                <h2>Card of the Day</h2>
                <div className='component__headerBorder'></div>
            </div>
            <div className='card-of-the-day__container bg-primary-400-opacity-200'>
                <CardImg props={Card}/>
                <CardInfo />
                <CardDesc />
            </div>
        </section>
    );
}

export default CardOfTheDay;
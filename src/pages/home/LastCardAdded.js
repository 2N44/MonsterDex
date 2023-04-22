import {ReactComponent as DotIcon} from '../../assets/home/icon_3_dots.svg'
import './LastCardAdded.css'

const DatabaseHeader = (props) => {
    
    return(
        <div className='last-card-added__containerHeader bg-primary-400-opacity-300'>
            {
                props.titles.map((title, index) =>
                    <div key={index} className='last-card-added__containerHeader__title'>
                        {title}
                    </div>
                )
            }       
        </div>
    );
}

const TableRow =  (props) => {
    return(
        <div className={`table-row__container ${(props.rowId+1)%2==0 ? "bg-neutral-400" : "bg-neutral-100"}`}>
            
            <div className='table-row__containerField'>
                {props.cardData.name.en}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.rarity}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.card_code}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.language}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.condition}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.number}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.note}
            </div>
            <div className='table-row__containerField'>
                {props.cardData.sleeve}
            </div>
        </div>
    );
}

const LoadMoreButton = () => {
    return(
        <div className='database-button__container'>
            <a className='database-button bg-neutral-100' href='#'>
                <DotIcon />
            </a>
        </div>
    );
}

const LastCardAdded = () => {

    const listTitles = ["Name", "Rarity", "Code", "Language", "Condition", "Number", "Note", "Sleeve"];
    const listLastCardAdded = [
        {
            "passcode": 45730592,
            "name": {
                "fr": "R\u00e9sonance Inflexcipateur",
                "en": "Adamancipator Resonance"
            },
            "set_code": "MP21",
            "card_code": "MP21-FR236",
            "rarity": "Commun",
            "condition": "Near-mint",
            "number": 1,
            "language": "FR",
            "edition": "1st",
            "note": "rangement: Tinbox 2021",
            "sleeve": "None"
        },
        {
            "passcode": 34302287,
            "name": {
                "fr": "Combat Spirale Spectre",
                "en": "Phantasm Spiral Battle"
            },
            "set_code": "MACR",
            "card_code": "MACR-FR072",
            "rarity": "Rare",
            "condition": "Near-mint",
            "number": 1,
            "language": "FR",
            "edition": "1st",
            "note": "rangement: Tinbox 2021",
            "sleeve": "None"
        },
        {
            "passcode": 45730592,
            "name": {
                "fr": "R\u00e9sonance Inflexcipateur",
                "en": "Adamancipator Resonance"
            },
            "set_code": "MP21",
            "card_code": "MP21-FR236",
            "rarity": "Commun",
            "condition": "Near-mint",
            "number": 1,
            "language": "FR",
            "edition": "1st",
            "note": "rangement: Tinbox 2021",
            "sleeve": "None"
        },
        {
            "passcode": 34302287,
            "name": {
                "fr": "Combat Spirale Spectre",
                "en": "Phantasm Spiral Battle"
            },
            "set_code": "MACR",
            "card_code": "MACR-FR072",
            "rarity": "Rare",
            "condition": "Near-mint",
            "number": 1,
            "language": "FR",
            "edition": "1st",
            "note": "rangement: Tinbox 2021",
            "sleeve": "None"
        },
        {
            "passcode": 45730592,
            "name": {
                "fr": "R\u00e9sonance Inflexcipateur",
                "en": "Adamancipator Resonance"
            },
            "set_code": "MP21",
            "card_code": "MP21-FR236",
            "rarity": "Commun",
            "condition": "Near-mint",
            "number": 1,
            "language": "FR",
            "edition": "1st",
            "note": "rangement: Tinbox 2021",
            "sleeve": "None"
        },
    ]

    return(
        <section className='last-card-added'>
            <div className='component__header'>
                <h2>Last card added</h2>
                <div className='component__headerBorder'></div>
            </div>
            <div className='last-card-added__container bg-primary-400-opacity-200'>
                <DatabaseHeader titles={listTitles}/>
                {
                    listLastCardAdded.map((lastCardAdded, index) =>
                        <TableRow key={index} cardData={lastCardAdded} rowId={index}/>
                    )
                }
                <LoadMoreButton />
            </div>            
        </section>
    );
}

export default LastCardAdded;
import cards from './cards';



export const duplicatedCards = cards.slice();
export const cardData = duplicatedCards.slice(1);
export const categoryTitles = cards[0];


export let extendedCards = {};
    categoryTitles.forEach(title => {
        cardData.forEach(card => {
            extendedCards[title] = card;
        })
    })



import cards from './cards';



export const duplicatedCards = cards.slice();
export const cardData = duplicatedCards.slice(1);
export const categoryTitles = cards[0];


let extendedCardData = {};

for(let i = 0; i < categoryTitles.length; i++){
    cardData.forEach(card => {
        extendedCardData[categoryTitles[i++]] = card;
    });
}

    const cardStatsJson = localStorage.getItem('stats');
    const cardStats = JSON.parse(cardStatsJson);
    if(!cardStats){
        const allStats = [];

        for(let i = 0; i< categoryTitles.length; i++){
        extendedCardData[categoryTitles[i]].forEach(extendedCard=>{
            allStats.push({
                word: extendedCard.word, 
                translation: extendedCard.translation, 
                category: categoryTitles[i],
                clicks: 0,
                correct: 0,
                wrong: 0,
                errors: 0
            });
        })
    }
        localStorage.setItem('stats', JSON.stringify(allStats));
    }

export const extendedCards = extendedCardData;

export  const concatTitle = (title) => {
        const strSplit = title.split(" ").join("");
        const newStr =
        strSplit.substring(0, 1).toLowerCase() + strSplit.substring(1);
        return newStr;
      };

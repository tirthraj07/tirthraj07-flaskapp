function toggle_info(card_no){
    const card_info_no = card_no + '-info';
    const cards = document.getElementsByClassName(card_no);
    const cards_info = document.getElementsByClassName(card_info_no);

    for(let i=0;i<cards.length;i++){
        cards[i].classList.toggle('card-active');

        const cardContent = cards[i].querySelector('.card-content');
        if (cards[i].classList.contains('card-active')) {
            cardContent.textContent = '-';
        } else {
            cardContent.textContent = '+';
        }
    }

    for(let i=0;i<cards_info.length;i++){
        cards_info[i].classList.toggle('card-info-active')
    }


}
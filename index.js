
    function showImage(card) {
        card.querySelector('.initial-image').style.display = 'none';
        card.querySelector('.hover-image').style.display = 'block';
    }

    function hideImage(card) {
        card.querySelector('.initial-image').style.display = 'block';
        card.querySelector('.hover-image').style.display = 'none';
    }


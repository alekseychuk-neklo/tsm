function activateTab(element) {
    changeClass([element], 'active-tab', true);
    changeElementsVisible(document.getElementsByClassName('tab-content'), 'none');
    changeElementsVisible([document.getElementById(element.dataset.id)], 'flex');
}

function changeClass(itemList, className, add = false) {
    // Convert, because can be HTMLCollection
    Array.from(itemList).map((element) => add ? element.classList.add(className) : element.classList.remove(className));

}

function changeElementsVisible(itemList, displayValue = 'none') {
    Array.from(itemList).forEach(element => element.style.display = displayValue);
}

window.onload = function () {
    changeElementsVisible([document.getElementsByClassName('tab-content')[0]], 'flex');
    Array.from(anchors = document.getElementsByClassName('tab-links')).map(item => {
        item.onclick = (event) => {
            changeClass(anchors, 'active-tab', false);
            activateTab(event.currentTarget);
        }
    })

};

//jQuery init
$(document).ready(function () {
    // hideMenu();
    $('.reviews_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

document.getElementById('burger').addEventListener('click', function () {
    let isCross = Array.from(this.classList).includes('cross');
    this.classList[isCross ? 'remove' : 'add']('cross');
    document.getElementById('menu').classList[isCross ? 'remove' : 'add']('visible');
});

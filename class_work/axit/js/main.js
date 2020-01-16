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
$(document).ready(function(){
    $('.reviews_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true ,
        arrows : false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.contact_form').submit(function (e) {
        e.preventDefault();
        Swal.fire('Any fool can use a computer');
    })

});
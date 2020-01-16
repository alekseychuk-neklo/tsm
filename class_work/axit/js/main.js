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
    let windowWidth = $(window).width();
    if(windowWidth<768){
        $(".menu").hide();
    }
    $('.reviews_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true ,
        arrows : false,
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
    $('.contact_form').submit(function (e) {
        e.preventDefault();
        Swal.fire('Any fool can use a computer');
    })
    $('.burger').click(function(e){
        e.preventDefault();
        let showed = $(this).data('data-show');
        if(!showed){
            console.log('show');
            $(".menu").fadeIn("slow");
        }else{
            console.log('hide');
            $(".menu").fadeOut("slow");
        }
        $(this).data('data-show', !showed);
    })
});
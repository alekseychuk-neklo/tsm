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
    Array.from( anchors = document.getElementsByClassName('tab-links')).map(item => {
        item.onclick = (event) => {
            changeClass(anchors, 'active-tab', false);
            activateTab(event.currentTarget);
        }
    })

};
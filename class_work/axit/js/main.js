function activateTab(element){
    changeClass([element], 'active-tab', true);
    const tabContents = document.getElementsByClassName('tab-content');
    changeElementsVisible(tabContents, 'none');
    let activeContent = document.getElementById(element.dataset.id);
    changeElementsVisible([activeContent], 'flex');

}

function changeClass(itemList, className, add=false){
    for (let item of itemList) {
        add?item.classList.add(className):item.classList.remove(className);
    }
}

function changeElementsVisible(itemList, displayValue='none'){
    for (let item of itemList) {
        item.style.display = displayValue;
    }
}

window.onload = function() {
    const anchors = document.getElementsByClassName('tab-links');
    changeElementsVisible([document.getElementsByClassName('tab-content')[0]], 'flex');
    for (let item of anchors) {
        item.onclick = function(event) {
            changeClass(anchors, 'active-tab', false);
            activateTab(event.currentTarget);

        };
    }
};
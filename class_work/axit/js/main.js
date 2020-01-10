window.onload = function() {
    var anchors = document.getElementsByClassName('tab-links');
    document.getElementsByClassName('tab-content')[0].style.display = 'block';
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function(event) {
            for(var j = 0; j < anchors.length; j++) {
                anchors[j].classList.remove('active-tab');
            }
            event.currentTarget.className += ' active-tab';
            var tabContents = document.getElementsByClassName('tab-content');
            for(var j = 0; j < tabContents.length; j++) {
                tabContents[j].style.display = "none";
            }
            var activeContent = document.getElementById(event.currentTarget.dataset.id);
            activeContent.style.display = 'block';
        };

    }
};
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("apply").addEventListener('click', () => {

        function modifyDOM(speed) {
            document.getElementsByTagName('video')[0].playbackRate = speed;
        }

        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')(' + document.getElementById('speed').value + ');'
        });
    });
});

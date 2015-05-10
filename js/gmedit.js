var NUMPICTURES = 32.0
var set = false;
var whatToObserve = {childList: true, attributes: true, subtree: true, attributeOldValue: true, attributeFilter: ['class', 'style']};
var mutationObserver = new MutationObserver(function(mutationRecords) {
  $.each(mutationRecords, function(index, mutationRecord) {
    if (mutationRecord.type === 'attributes') {
      if (mutationRecord.attributeName === 'class') {
        if (!set)
        {
            set = true;
            var id = chrome.runtime.id;
            var v = Math.floor(Math.random() * NUMPICTURES) + 1;

            var inp = document.getElementsByClassName('nH');
            inp[1].style.setProperty('background-image',
                                     'url(chrome-extension://' + id +
                                     '/backgrounds/' + v +
                                      '.jpg' + ')', null);
            inp[1].style.setProperty('background-position', 'center', null);
            inp[1].style.setProperty('background-repeat', 'no-repeat', null);
            inp[1].style.setProperty('background-size', 'cover', null);

            var inp = document.getElementsByClassName('aeN');
            console.log(inp);
            inp[0].style.setProperty('background-color', 'rgba(0, 0, 0, .4)');
        }
      }
    }
  });
});
mutationObserver.observe(document, whatToObserve);


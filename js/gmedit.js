var NUMPICTURES = 43.0;
var set = false;
var whatToObserve = {childList: true, attributes: true, subtree: true,
    attributeOldValue: true, attributeFilter: ['class', 'style']};
var mutationObserver = new MutationObserver(function(mutationRecords) {
  $.each(mutationRecords, function(index, mutationRecord) {
    if (mutationRecord.type === 'attributes') {
      if (mutationRecord.attributeName === 'class') {
        if (!set)
        {
            set = true;
            var id = chrome.runtime.id;
            var v = Math.floor(Math.random() * NUMPICTURES) + 1;

            var inp = document.getElementsByClassName('aeJ');
            for (i = 0; i < inp.length; i++)
            {
              inp[i].style.setProperty('background', 'rgba(0,0,0,0.0)');
            }
            var inp = document.getElementsByClassName('aeJ');
            // for (i = 0; i < inp.length; i++)
            // {
            //   inp[i].style.setProperty('background', 'rgba(0,0,0,0.0)');
            // }

            var inp = document.getElementsByClassName('nH');
            var x = inp[1].style;

            x.setProperty('background-image',
                                     'url(chrome-extension://' + id +
                                     '/backgrounds/' + v +
                                      '.jpg' + ')', null);
            x.setProperty('background-position', 'center', null);
            x.setProperty('background-repeat', 'no-repeat', null);
            x.setProperty('background-size', 'cover', null);
        }
      }
    }
  });
});
mutationObserver.observe(document, whatToObserve);


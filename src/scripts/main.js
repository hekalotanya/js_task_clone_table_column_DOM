'use strict';

// write your code here
const trArray = [...document.querySelectorAll('tr')];

trArray[0].querySelectorAll('th')[4]
  .before(trArray[0].querySelectorAll('th')[1].cloneNode(true));

for (let i = 1; i < trArray.length - 1; i++) {
  trArray[i].querySelectorAll('td')[4]
    .before(trArray[i].querySelectorAll('td')[1].cloneNode(true));
}

trArray[trArray.length - 1].querySelectorAll('th')[4]
  .before(trArray[trArray.length - 1]
    .querySelectorAll('th')[1].cloneNode(true));

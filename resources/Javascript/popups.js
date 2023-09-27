const hackerText = document.getElementById('hack');
const devineETFText = document.getElementById('divine');
let isHVisible = false;
let isDVisible = false;

const hackerPresentationOne = document.getElementById('popupone');
const ETFPresentationTwo = document.getElementById('popuptwo');
console.log(hackerPresentationOne);

hackerText.onclick = function(elem) {

    if(isHVisible === false) {
        hackerPresentationOne.style.display = 'block';
        isHVisible = true;
        //change height
    } else {
        isHVisible = false;
        hackerPresentationOne.style.display = 'none';
    }
}

devineETFText.onclick = function(elem) {

    if(isDVisible === false) {
        ETFPresentationTwo.style.display = 'block';
        isDVisible = true;
        //change height
    } else {
        isDVisible = false;
        ETFPresentationTwo.style.display = 'none';
    }
}


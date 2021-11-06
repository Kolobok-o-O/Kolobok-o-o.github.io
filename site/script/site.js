var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/FirefoxLogo.png') {
        myImage.setAttribute ('src','images/FirefoxLogo2.png');
    } else {
        myImage.setAttribute ('src','images/FirefoxLogo.png')
    }
}
var myBotton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите имя пользователя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myBotton.onclick = function () {
    setUserName();
}
//Lets Create Onclick Function for Label
//get the elements by Id
var btnHtml = document.getElementById('btn-1');
var btnCss = document.getElementById('btn-2');
var btnJava = document.getElementById('btn-3');
//add event listener for buttons
btnHtml.addEventListener('click', htmlClick);
btnCss.addEventListener('click', cssClick);
btnJava.addEventListener('click', javaClick);
//create function to click event
function htmlClick() {
    var smsBox = document.getElementsByClassName('sms-box')[0];
    smsBox.style.display = 'none';
    var div = document.createElement('div');
    div.className = 'message';
    // console.log(div)
    var sms = document.getElementsByClassName('sms')[0];
    var message = document.createElement('p');
    message.innerHTML = "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.";
    message.className = 'Message';
    var line = document.createElement('hr');
    // console.log(message);
    sms.appendChild(div);
    div.appendChild(message);
    div.appendChild(line);
}
function cssClick() {
    var smsBox = document.getElementsByClassName('sms-box')[0];
    smsBox.style.display = 'none';
    var div = document.createElement('div');
    div.className = 'message';
    // console.log(div)
    var sms = document.getElementsByClassName('sms')[0];
    var message = document.createElement('p');
    message.innerHTML = "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
    message.className = 'Message';
    var line = document.createElement('hr');
    // console.log(message);
    sms.appendChild(div);
    div.appendChild(message);
    div.appendChild(line);
}
function javaClick() {
    var smsBox = document.getElementsByClassName('sms-box')[0];
    smsBox.style.display = 'none';
    var div = document.createElement('div');
    div.className = 'message';
    // console.log(div)
    var sms = document.getElementsByClassName('sms')[0];
    var message = document.createElement('p');
    message.innerHTML = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.";
    message.className = 'Message';
    var line = document.createElement('hr');
    // console.log(message);
    sms.appendChild(div);
    div.appendChild(message);
    div.appendChild(line);
}
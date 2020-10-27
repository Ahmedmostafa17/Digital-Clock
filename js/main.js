function clock()
{
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var ampm = document.getElementById('ampm');


    var h= new Date().getHours();
    var m= new Date().getMinutes();
    var s= new Date().getSeconds();
    var am = 'AM';
   
    if(h > 12)
    {
     h= h-12;
    var am = 'PM';
    }
   
    h= (h<10) ?'0'+h : h
    m= (m<10) ?'0'+m : m
    s= (s<10) ?'0'+s : s



 hours.innerHTML = h;
 minutes.innerHTML = m;
 seconds.innerHTML = s;

    

}

var interval = setInterval(clock, 1000);

/*************************************************** */
const lang = navigator.language;
let date = new Date();
let dayNumber  = date.getDate();
let month  = date.getMonth();
let dayName = date.toLocaleString(lang,{weekday:'long'})
let monthName = date.toLocaleString(lang,{month:'long'})
let year = date.getFullYear();
document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('DayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;


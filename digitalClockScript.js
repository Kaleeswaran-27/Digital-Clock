function changeTime(){

    let date = new Date();

    let day = date.getDay();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec =  date.getSeconds();

    let sun = document.getElementById('sun');
    let mon = document.getElementById('mon');
    let tue = document.getElementById('tue');
    let wed = document.getElementById('wed');
    let thu = document.getElementById('thu');
    let fri = document.getElementById('fri');
    let sat = document.getElementById('sat');

    switch(day) {

        case 0 :
            sun.style.opacity = 1;
            sun.style.textShadow = '0 0 10px white ';
            break;
        case 1 :
            mon.style.opacity = 1;
            mon.style.textShadow = '0 0 10px white ';
            break;
        case 2 :
            tue.style.opacity = 1;
            tue.style.textShadow = '0 0 10px white ';
            break;
        case 3 :
            wed.style.opacity = 1;
            wed.style.textShadow = '0 0 10px white ';
            break;
        case 4 :
            thu.style.opacity = 1;
            thu.style.textShadow = '0 0 10px white ';
            break;
        case 5 :
            fri.style.opacity = 1;
            fri.style.textShadow = '0 0 10px white ';
            break;
        case 6 :
            sat.style.opacity = 1;
            sat.style.textShadow = '0 0 10px white ';
            break;
        default:
            break;

        }
        
        if(hr>12){
            
            document.getElementById('hr').innerHTML = padZero(hr-12);
            document.getElementById('ampm').innerHTML = "PM";
            
        } 
        
        else {
            document.getElementById('hr').innerHTML = padZero(hr);
        }
        
        document.getElementById('min').innerHTML = padZero(min);
        document.getElementById('sec').innerHTML = padZero(sec);
        
    }

function padZero(num) {
    return num<10 ? "0"+num : num;
}

setInterval(changeTime, 1000);
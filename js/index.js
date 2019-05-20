
function blue(){
  document.getElementById('body-content').style.backgroundColor = 'blue'
  document.getElementById('body-content-panel').style.color = 'white'
  document.getElementById('kotak1').style.backgroundColor = 'white'
  document.getElementById('kotak2').style.backgroundColor = 'white'
  document.getElementById('body-content-time').style.backgroundColor = 'white'
}
function red(){
  document.getElementById('body-content').style.backgroundColor = 'red'
  document.getElementById('body-content-panel').style.color = 'white'
  document.getElementById('kotak1').style.backgroundColor = 'white'
  document.getElementById('kotak2').style.backgroundColor = 'white'
}
function green(){
  document.getElementById('body-content').style.backgroundColor = 'green'
  document.getElementById('body-content-panel').style.color = 'white'
  document.getElementById('kotak1').style.backgroundColor = 'white'
  document.getElementById('kotak2').style.backgroundColor = 'white'
}
function back(){
  document.getElementById('body-content').style.backgroundColor = 'white'
  document.getElementById('body-content').style.color = 'black'
  document.getElementById('kotak1').style.backgroundColor = 'white'
  document.getElementById('kotak2').style.backgroundColor = 'white'
  document.getElementById('bod  y-content-panel').style.color = 'black'
}


function val(){
  let a = document.getElementById("select_id").value;

   if (a == "senin") {
    document.getElementById("1").innerHTML = '10.30 - 13.30';

    document.getElementById("2").innerHTML = '13.30 - 14-40';
    
    document.getElementById("3").innerHTML = '15.50 - 19.50';
    
    document.getElementById("4").innerHTML = '20.00 - 22.00';

    document.getElementById("video").src = 'https://www.youtube.com/embed/6ZfuNTqbHE8';

    document.getElementById("img1").src = './img/2.svg';

    document.getElementById("img2").src = './img/1.svg';


    kotak1 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/T6DJcgm3wNY';
    }
    kotak2 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/6ZfuNTqbHE8';
    }

  } else if(a == "selasa"){

    document.getElementById("1").innerHTML = '13.30 - 15.30';

    document.getElementById("2").innerHTML = '15.40 - 17-40';
    
    document.getElementById("3").innerHTML = '17.50 - 19.50';
    
    document.getElementById("4").innerHTML = '20.00 - 22.00';

    document.getElementById("video").src = 'https://www.youtube.com/embed/T6DJcgm3wNY';

    document.getElementById("img1").src = './img/1.svg';

    document.getElementById("img2").src = './img/2.svg';

    kotak1 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/T6DJcgm3wNY';
    }
    kotak2 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/6ZfuNTqbHE8';
    }
    
  } else{

    document.getElementById("1").innerHTML = '07.30 - 10.30';

    document.getElementById("2").innerHTML = '11.40 - 13-40';
    
    document.getElementById("3").innerHTML = '13.50 - 15.50';
    
    document.getElementById("4").innerHTML = '22.00 - 01.00';

    document.getElementById("video").src = 'https://www.youtube.com/embed/0WWzgGyAH6Y';

    document.getElementById("img1").src = './img/2.svg';

    document.getElementById("img2").src = './img/1.svg';

    kotak1 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/0WWzgGyAH6Y';
    }
    kotak2 = function(){
      document.getElementById("video").src = 'https://www.youtube.com/embed/6ZfuNTqbHE8';
    }
  }
        
}
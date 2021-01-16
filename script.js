
let time = 0;
let xSpeed = 60;
let ySpeed = 120;


function myFunc() {
  if (xSpeed*time < window.innerWidth) {
    time++;
    }
  else {
    time = 0;
    }

    document.getElementById("burd").style.left = xSpeed * time + "px";
    document.getElementById("burd").style.top = window.innerHeight - (ySpeed*time - .5 * 9.8 * Math.pow(time, 2)) + "px"; //Gravity (time-.5 * 9.8 * Math.pow(time,2))
  
}


setInterval(myFunc, 250);





// function checkDistance(){
//   dist = box.distanceTo(critter);
//   if (dist < 50){
//    output.innerHTML = "Collision: " + dist;
//   } else {
//    output.innerHTML = "No collision: " + dist;
//   } // end if
//  } // end checkDistance
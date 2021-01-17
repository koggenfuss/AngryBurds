
let time = 0;
let xSpeed = 60;
let ySpeed = 120;
let score = 0;


let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

console.log(`Inner width of window = ${innerWidth}`);
console.log(`Inner height of window = ${innerHeight}`);



function myFunc() {
  if (xSpeed*time < window.innerWidth) {// and no collision
    time++;
    }
  else {
    time = 0; //there was a collision, add hit or miss to window, reset
    }

    document.getElementById("burd").style.left = xSpeed * time + "px";
    document.getElementById("burd").style.top = window.innerHeight - (ySpeed*time - .5 * 9.8 * Math.pow(time, 2)) + "px"; //Gravity (time-.5 * 9.8 * Math.pow(time,2))
  
}


function detectCollision() {
  let burd = document.getElementById("burd").getBoundingClientRect();
  let house = document.getElementById("burdHouse").getBoundingClientRect();

  console.log(`Burd rect = ${burd}`);
  console.log(`House rect = ${house}`);

  if (burd.left < house.left + house.width &&
      burd.left + house.width > house.left &&
      burd.top < house.top + house.height &&
      burd.height + burd.top > house.top) {
        score++;
        document.getElementById("message").textContent = "Nice Shot!";
      }


    }



    setInterval(myFunc, 250);
    //clearInterval(myVar); //stop setInterval from running



// function checkDistance(){
//   dist = box.distanceTo(critter);
//   if (dist < 50){
//    output.innerHTML = "Collision: " + dist;
//   } else {
//    output.innerHTML = "No collision: " + dist;
//   } // end if
//  } // end checkDistance
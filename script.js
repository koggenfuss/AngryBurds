
let time = 0;
let xSpeed = 50;
let ySpeed = 140;
let score = 0;


function myFunc() {
  
  if ((xSpeed*time < window.innerWidth) && (!detectCollision())) {// and no collision???
    time++;
    }
  else {
    //console.log("you missed"); // not the place to put this statement because after hit, it drops into the else and says you missed :(  where to put this statement???????
    time = 0; //there was a collision, add hit or miss to window, reset????
    }

    document.getElementById("burd").style.left = xSpeed * time + "px"; // x-axis
    document.getElementById("burd").style.top = window.innerHeight - (ySpeed*time - .5 * 9.8 * Math.pow(time, 2)) + "px"; //Gravity (time-.5 * 9.8 * Math.pow(time,2))   y-axis
  
}


function detectCollision() {
  
  let burd = document.getElementById("burd").getBoundingClientRect();
  let house = document.getElementById("burdHouse").getBoundingClientRect();

  console.log(`Burd rect = ${burd}`);
  console.log(`House rect = ${house}`);

  console.log(`burd.left = ${burd.left}`);
  console.log(`house.left = ${house.left}`);
  console.log(`house.width = ${house.width}`);
  console.log(`burd.top = ${burd.top}`);
  console.log(`house.top = ${house.top}`);
  console.log(`house.height = ${house.height}`);
  console.log(`burd.height = ${burd.height}`);
 
  
  if (burd.left < house.left + house.width &&
      burd.left + burd.width > house.left  &&
      burd.top < house.top + house.height  &&
      burd.top + burd.height > house.top){
        let collision = true;
        score++;
        document.getElementById("message").textContent = "Nice Shot!";
        console.log("nice shot!");
      }
      // else {
      //   // document.getElementById("message").textContent = "You missed!";
       // console.log("you missed");
      // }


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

$(document).ready(function(){
  $("button").click(function(){
    $(".html").fadeIn();
    $(".css").fadeIn("slow");
    $(".js").fadeIn(2000);
    $(".php").fadeIn(2500);
    $(".mysql").fadeIn(2600);
    $(".myadmin").fadeIn(2700);
    $(".msserv").fadeIn(3000);
  });
});

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;

changeImage(x, y);
}

function changeImage(x, y) {
    let image = document.querySelector('.face img');

    let centerX = 968;
    let centerY = 320;

    let distanceX = x - centerX;
    let distanceY = y - centerY;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {

  
        if (distanceX > 0) {
            image.src = "assets/images/gabright.png";
        } else {
            image.src = "assets/images/gableft.png";
        }

    } else {

        if (distanceY > 0) {
            image.src = "assets/images/gabdown.png";
            followMe();
        } else {
            image.src = "assets/images/gabup.png";
        }
}
}

function followMe(){
let contacts 
}
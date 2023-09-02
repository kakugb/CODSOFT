
    let screen = document.querySelector('#screen');
    let button_Board = document.querySelector(".button-board");
    let all_Buttons = Array.from(button_Board.querySelectorAll(".btn"));
    all_Buttons.forEach(key => {
      key.addEventListener('click', (val) => {
   let x = val.target.value;
  if(x == "=") {
    screen.innerHTML = eval( screen.innerHTML);    
} else {
      screen.innerHTML += x;  
}
     });  
    
    })


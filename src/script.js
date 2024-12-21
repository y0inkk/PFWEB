const body = document.body;
let count = 0;


function toggleTheme(){
    
    if(count == 0){
        document.body.style.backgroundColor = "#15202b";
        document.body.style.color = "white";
        document.body.style.transition = 'background-color 0.3s ease-in';
        
    }
    else if(count == 1){
        document.body.style.backgroundColor = "#f8f4f4";
        document.body.style.color = "black";document.body.style.transition = 'background-color 0.3s ease-in';
    }

    count++;
    console.log(count);

    if(count == 2){
        count = 0;
    }
}
    
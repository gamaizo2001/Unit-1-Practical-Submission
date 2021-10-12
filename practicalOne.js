var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

let elementCreator = document.createElement("div")
document.body.appendChild(elementCreator);

for(let x=0; x<stringers.length; x++){
    let elementCreator = document.createElement("div");
    let message = document.createElement("div");
    // message.innerHTML="The value is " + stringers[x];

    if (stringers[x]<10){
        message.innerHTML="The value is " + stringers[x] + " it is less than 10";
    }else if(stringers[x].length>5){
        message.innerHTML="The value is " + stringers[x] + " long word";
    }else if(stringers[x]===15){
        message.innerHTML="The value is " + stringers[x] + " perfect 15";
    }else{
        message.innerHTML="The value is " + stringers[x] +  " normal";
    }

    elementCreator.addEventListener("click", function (){
        this.style.color="blue";
    })


    elementCreator.appendChild(message);

    document.body.appendChild(elementCreator)
}
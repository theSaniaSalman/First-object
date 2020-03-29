var myCat={
    "name":"Ms. Peanuts",
    "color":"brown",
    "age":7,
    "gender":"femaile",
    "eyes":"black",
    "food":["meat","milk","egg-white"]
    };

function myPet(prop){
    if(myCat.hasOwnProperty(prop)){
    return myCat[prop];
    }

    else{
        return "Sorry, not found";
    }
}
var answer = prompt("What do you want to know about my cat?");

document.write(myPet(answer));


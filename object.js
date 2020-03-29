var myCat=[
    {
    "type":"cat",
    "name":"Ms. Peanuts",
    "color":"brown",
    "age":"4 years",
    "gender":"female",
    "eyes":"black",
    "food":["meat"," milk"," egg-white"] 
    },
    {
        "type":"dog",
        "name":"Mr. Bob",
        "color":"black",
        "age":"2.5 years",
        "gender":"male",
        "eyes":"green",
        "food":["meat"," milk"," ice-cream"] 
    } ,
    {
    "type":"fish",
    "name":"Ms. Fanny",
    "color":"orange",
    "age":"2 years",
    "gender":"female",
    "eyes":"blue",
    "food":["fish-food"," plants"] 
    },
    {
    "type":"parrot",
    "name":"Mr. Garry",
    "color":"blue",
    "age":"2 months",
    "gender":"ale",
    "eyes":"gray",
    "food":["fruits"," plants"]
    },
    {
    "type":"rabbit",
    "name":"Mr. Parker",
    "color":"white",
    "age":"4 years",
    "gender":"male",
    "eyes":"blue",
    "food":["carrots"," plants"]
    },
    {
    "type":"tortoise",
    "name":"Mr. Oswald",
    "color":"green",
     "age":"8 months",
    "gender":"male",
    "eyes":"black",
    "food":["plants"," insects"]
    },
     {
    "type":"snake",
    "name":"Mr. Trophy",
    "color":"green",
    "age":"2 years",
    "gender":"male",
    "eyes":"blue",
    "food":["insects"," worms"]
    }
];

function myPet(numb){
    if(numb>6){
        return "Out of range";
    }
    else{
    document.write("You got a "+ myCat[numb].type + " as your pet");
    var info = prompt("Select the information");
    if(myCat[numb].hasOwnProperty(info)){
        document.write("</br>");
        return myCat[numb][info];
    }
    else{
        document.write("</br>");
        return "Sorry, not found";
    }
}
}
var answer = prompt("Type a number for a pet (0-6)");
document.write(myPet(answer));



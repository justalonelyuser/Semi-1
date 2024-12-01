const quiz=[
    {
        question:"Identify the actor on the basis of given clues",
        clue1:"A nepali actor who was born on March 10 1991 who is One of the highest paid actors of Nepal.",
        clue2:"Started his carrer with his first movie 'Thulo Manchhe'",
        clue3:'Became a star in Nepali Flim Industry after the huge sucess of "Prem Geet 3"' ,
        ans:"Pradeep Khadka"
    },
    {
        question:"Identify the personality on the basis of given clues",
        clue1:"He is a south african anti -apartheid born on July 18, 1918",
        clue2:"Received novel peace prize in 1993 AD",
        clue3:"Considered as the father of modern South Africa",
        ans:"Nelson Mandela"
    },
    {
        question:"Identify the personality on the basis of given clues",
        clue1:"He is an american software developer who was born on October 28 1955 .",
        clue2:"Was the richest person of the world between 1995 to 2010.",
        clue3:"Is the cofounder of Microsoft",
        ans:"Bill Gates"

        }

        
]

let mainquestion=document.querySelector(".formainquestion");
let clue_1=document.querySelector(".clue1")
let clue_2=document.querySelector(".clue2")
let clue_3=document.querySelector(".clue3")
let ams=document.querySelector(".ans1");
let amsgiver=document.querySelector(".getans1");
let givenext=document.querySelector(".getnextquestion");
let firstclue_give=document.querySelector(".forfirstclue")
let secondclue_give=document.querySelector(".forsecondclue")
let thirdclue_give=document.querySelector(".forthirdclue")
let counter=0;
let counter_for_others=0;

amsgiver.addEventListener("click", ()=>{
    ams.innerHTML=quiz[counter_for_others].ans;
})
givenext.addEventListener("click", ()=>{
    if(counter==0){
        mainquestion.innerHTML=quiz[counter].question;
        counter_for_others=counter;
        counter+=1;
    }
    else if (counter<=2){
        mainquestion.innerHTML=quiz[counter].question;
        clue_1.innerHTML=""
        clue_2.innerHTML=""
        clue_3.innerHTML=""
        ams.innerHTML=""
        counter+=1;
        counter_for_others+=1
    }
    else{
        window.open("streams.html", "_self")
    }
})
firstclue_give.addEventListener("click", ()=>{
    clue_1.innerHTML=quiz[counter_for_others].clue1;
})
secondclue_give.addEventListener("click", ()=>{
    clue_2.innerHTML=quiz[counter_for_others].clue2;
})
thirdclue_give.addEventListener("click", ()=>{
    clue_3.innerHTML=quiz[counter_for_others].clue3;
})
const db=[
    
    {
        question:"What is the depth of Lake Baikal?[In KM]",
        ans:"1642 KM"
    },
    {
        question:"What is the height of Burj Khalifa?[In meters]",
        ans:"829.8m"
    },
    {
        question:"What is the length of Manakamana cable car?[In KM]",
        ans:"2.7km"
},]

let nextq=document.querySelector(".getnextquestion");
let giveans=document.querySelector(".getans1");
let qholder=document.querySelector(".forq");
counter=0;
nextq.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].question;
    }
    else{
        window.open("streams.html", "_self");
    }
})
giveans.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].ans;
        counter=counter+1;
    }
    else{

    }
})
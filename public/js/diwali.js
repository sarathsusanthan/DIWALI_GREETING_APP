function check(){
    var nam= document.getElementById("nam").value;
    var msg=document.getElementById("msg");
    if(nam.trim()==""){
        msg.innerHTML="Enter your name";
        msg.style.color="white";
        msg.style.backgroundColor="black";
        return false;
    }else{
        msg.innerHTML=`WELCOME ${nam}<br> <i>may the devine light of diwali spread into your life <br>peace,prosperity, pleasure & good health</i>`;
        return true;
    }
}
function validate(){
    var name= document.getElementById("rnam").value;
    var email= document.getElementById("em").value;
    var error= document.getElementById("error");
    var mail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name.trim()==""||email.trim()==""){
        error.innerHTML="Fill the Detials";
        error.style.color="white";
        error.style.backgroundColor="black";
        return false;
    }else{
        if(mail.test(email)){
            error.innerHTML="";
            return true;
        }else{
            error.innerHTML="Email is invalid";
            error.style.color="white";
            error.style.backgroundColor="black";
            return false;
        }
    }
}
function show(){
    var n=document.getElementById("namam").value;
    var e=document.getElementById("emai").value;
    alert("Greetings sent to "+n+" at "+e);
}
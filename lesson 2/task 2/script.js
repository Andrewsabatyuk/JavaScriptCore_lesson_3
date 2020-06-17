let login = prompt("Who's there?");

if  (login == "Admin"){
    let pass= prompt("password?");
    if (pass == "TheMaster"){
        alert('Welcome')
       }else  if (pass = "Cancel"){
        alert('canceled')
    } else {
        alert("I don't know you")
    }
}else if (login == "Cancel"){
    alert('Canceled')
}else{
    alert("I don't know you")
} 
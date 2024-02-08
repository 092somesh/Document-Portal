function myFun() {
    var a=document.getElementById("name").value;
    var b=document.getElementById("pass").value;
    var c=document.getElementById("cpass").value;

    if(a.length < 3 || a.length >20 )
    {
        document.getElementById("messege").innerHTML="enter valid name";
        return false;
    }

    if(b.length <8)
    {
        document.getElementById("pass_span").innerHTML="enter valid password";
        return false;
    }

    if(b != c)
    {
        document.getElementById("cpass_span").innerHTML="enter correct password";
        return false;
    }

    alert("Registered Succesfully.");
}
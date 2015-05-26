function toggleEmail() {
    //alert("Yep, my function is being called!");
    //document.getElementById("Ross").style.backgroundColor = "blue";

    //var docBody = document.getElementById("docBody");

    //docBody.style.backgroundColor = "blue";

    if (document.getElementById("subscribe").checked == true) {
        document.getElementById("emailpara").style.display = "inline";
    }
    else {
        document.getElementById("emailpara").style.display = "none";
    }
}

function setHomeAddress(){
    window.alert(document.getElementById("homeaddress").value = document.getElementById("postaladdress").value);
}

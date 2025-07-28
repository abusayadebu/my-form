function clickHandler(){
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    console.log("Entered name", nameValue);
    console.log("entered email", emailValue);

}
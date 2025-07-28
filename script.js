function clickHandler(){
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;

    localStorage.setItem("userName", nameValue);
    localStorage.setItem("userEmail", emailValue);


    // now go to the show.html file
    window.location.href = "show.html";
}

// show.html file working here

// window.onload = function(){
//     const showName = document.getElementById("givenName");
//     const showEmail = document.getElementById("givenEmail");

//     const getName = localStorage.getItem("userName");
//     const getEmail = localStorage.getItem("userEmail");

//     showName.textContent = getName;
//     showEmail.textContent = getEmail;

// }

window.onload = function(){
    const showName = document.getElementById("givenName");
    const showEmail = document.getElementById("givenEmail");

    if(showName && showEmail) {  // <-- Check if elements exist
        const getName = localStorage.getItem("userName");
        const getEmail = localStorage.getItem("userEmail");

        showName.textContent = getName;
        showEmail.textContent = getEmail;
    }
}

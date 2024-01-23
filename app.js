function checkPalWord(){
    //Access the user input and paragraph element
    const input = document.getElementById('user-input').value;
    const displayPal = document.getElementById('pal-show');
    //Remove any non alphanumeric characters from user input
    const result = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    //Reverse the order of the user input to start from end to start
    const reversed = result.split('').reverse().join(''); 

    //Return results to user
    if(input==''){
        displayPal.innerText = "Enter a word!";
    } else if(result===reversed){
        displayPal.innerText = "The Palindrome of " + input + " is " + reversed + "."
    }else{
        displayPal.innerText =  input + " is not a Palindrome.";
    }   
}


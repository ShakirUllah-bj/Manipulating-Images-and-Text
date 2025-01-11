
let output = document.getElementById("output");


document.getElementById("setParaText")
.addEventListener("click", function(){
    let setParagraph = document.getElementById("setParagraph");
    let inputText = document.getElementById("inputText");

    if(inputText.value.trim() === ""){
        output.textContent = "input field is empty";
    }
    else{
        setParagraph.textContent = inputText.value;
        output.textContent = "the content of paragraph is updated.";
        inputText.value = "";
    }
   
})

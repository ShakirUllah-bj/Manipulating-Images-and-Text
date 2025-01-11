
let output = document.getElementById("output");

// SETTING PARAGRAPH TEXT
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

// TOGGLE BTN CODE  
document.getElementById("toggleBtn").addEventListener("click", () => {
let image = document.querySelector("img");
if(image.src.includes("image1.png")){
image.src = "./image2.png";
output.textContent = "image changed to image 2"
}
else{
    image.src = "./image1.png";
    output.textContent = "image changed to image 1"
}
})


document.getElementById("hideBtn").addEventListener("click", () => {
    document.querySelector("img").style.display = "none";
    document.getElementById("hideBtn").style.display = "none";
})

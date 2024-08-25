var elements = document.querySelectorAll("li");

let activeElement = null;

elements.forEach(changeBg);

function changeBg(element) {
    byClicking(element);
    byKeyPress(element);
}

function byClicking(element) {
    element.addEventListener("click", function() {
        if (activeElement) {
            activeElement.classList.remove("rateBG");
        }

        element.classList.add("rateBG");
        activeElement = element;
        var rate = this.innerHTML;
        submit(rate);
    });
}

function byKeyPress(element) {
    element.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            if (activeElement) {
                activeElement.classList.remove("rateBG");
            }
            element.classList.add("rateBG");
            activeElement = element;
            var rate = this.innerHTML;
            submit(rate);
        } 
    })}


function submit(val) {
    var submitBtn = document.querySelector("button");
    submitBtn.style.cursor = "pointer";
    submitBtn.addEventListener("mouseenter", function() {
        submitBtn.style.backgroundColor = "white";
    });
    submitBtn.addEventListener("mouseleave", function() {
        submitBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    })
    submitBtn.addEventListener("click", function() {
        document.querySelector(".rating").style.display = "none";
        document.querySelector(".thanks-note").style.display = "block";
        document.querySelector(".rating-msg").textContent = "You selected " + val + " out of 5";
    })
}



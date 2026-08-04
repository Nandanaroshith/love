// ==============================
// PASSWORD CHECK
// ==============================

function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === "AUG12") {

        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("coverPage").style.display = "flex";

        // Play background music
       // Play background music from 36 seconds
let music = document.getElementById("bgMusic");

music.addEventListener("loadedmetadata", function () {
    music.currentTime = 36;
}, { once: true });

music.play().catch(function (error) {
    console.log(error);
});

    } else {

        document.getElementById("error").innerHTML = "Wrong Password ❤️";

    }

}



// ==============================
// COVER → BEGINNING
// ==============================

function showBeginning() {

    document.getElementById("coverPage").style.display = "none";
    document.getElementById("beginningPage").style.display = "flex";

}



// ==============================
// BEGINNING → JOURNEY
// ==============================

function showJourney() {

    document.getElementById("beginningPage").style.display = "none";
    document.getElementById("journeyPage").style.display = "flex";

}



// ==============================
// JOURNEY → MEMORIES
// ==============================

function showMemories() {

    document.getElementById("journeyPage").style.display = "none";
    document.getElementById("memoryPage").style.display = "flex";

}



// ==============================
// MEMORY SLIDESHOW
// ==============================

let memories = document.querySelectorAll(".memory");
let memoryIndex = 0;

function showNextMemory() {

    memories.forEach(function(memory) {
        memory.classList.remove("active");
    });

    if (memories.length > 0) {

        memories[memoryIndex].classList.add("active");

        memoryIndex++;

        if (memoryIndex >= memories.length) {
            memoryIndex = 0;
        }

    }

}

window.onload = function () {

    if (memories.length > 0) {

        showNextMemory();

        setInterval(showNextMemory, 4000);

    }

};



// ==============================
// LOVE LETTER
// ==============================

let letterMessage = `My Dearest Love ❤️

Happy 2nd Anniversary.

730 days...
Countless memories...
One beautiful story.

Somewhere between our first conversation,
our first selfie,
our random laughs,
our little fights,
and all the moments in between...

I found my favourite person.

Thank you for making ordinary days feel special.

Thank you for loving me,
supporting me,
and choosing me every single day.

If I had the chance to choose again...

I'd still choose you.

Again.
And again.
And forever.

Happy Anniversary ❤️

Forever Yours,
Nandana ❤️`;

let letterIndex = 0;
let typingTimer;

function showLetter() {

    document.getElementById("memoryPage").style.display = "none";
    document.getElementById("letterPage").style.display = "flex";

    clearTimeout(typingTimer);

    letterIndex = 0;
    document.getElementById("letterText").innerHTML = "";

    typeLetter();

}

function typeLetter() {

    if (letterIndex < letterMessage.length) {

        document.getElementById("letterText").innerHTML += letterMessage.charAt(letterIndex);

        letterIndex++;

        typingTimer = setTimeout(typeLetter, 35);

    }

}

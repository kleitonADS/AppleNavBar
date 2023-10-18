imgApple = document.querySelector(".logo img")

function switchbutton() {
  html = document.documentElement;
  html.classList.toggle("dark");

     if (html.classList.contains("dark")) {
        imgApple.setAttribute("src", "./assets/images/apple-fill17px-black.svg")

        // imgButtonNotes.setAttribute("src", "./assets/img/edit-line-w.svg")
    } else {
        imgApple.setAttribute("src", "./assets/images/apple-fill17px.svg")

        // imgButtonNotes.setAttribute("src", "./assets/img/edit-line.svg")
    }
}


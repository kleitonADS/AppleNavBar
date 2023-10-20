imgApple = document.querySelector(".logo img");
imgSearch = document.querySelector(".link-search img")
imgBag = document.querySelector(".link-bag img");



function switchbutton() {
  html = document.documentElement;
  html.classList.toggle("dark");

     if (html.classList.contains("dark")) {
        imgApple.setAttribute("src", "./assets/images/apple-fill17px-black.svg")

        imgSearch.setAttribute("src", "./assets/images/search-line-black.svg");

        imgBag.setAttribute("src", "./assets/images/shopping-bag-line-black.svg");

    } else {
        imgApple.setAttribute("src", "./assets/images/apple-fill17px.svg");

        imgSearch.setAttribute("src", "./assets/images/search-line.svg");

        imgBag.setAttribute("src", "./assets/images/shopping-bag-line.svg");

    }
}


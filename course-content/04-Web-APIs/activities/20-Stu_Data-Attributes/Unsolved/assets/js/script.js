var container = document.querySelector(".container");

  container.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".box")) {
      var state = element.getAttribute("data-state");
      if (state === "hidden"){

        element.setAttribute = ("data-state","visible")
        element.textContent = element.getAttribute("data-number");
      } else {
        element.textContent = "";
        element.setAttribute("data-state", "hidden")
      }
    }

  });

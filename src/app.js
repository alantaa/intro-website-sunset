function donate() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let name = prompt("Thank you for clicking to donate! What's your name?");
  let donate = prompt(
    "Do you want to donate to Mind, a mental health charity committed to helping make a difference to those around us? (yes or no)"
  );
  console.log({ donate, name });
  if (name.length === 0 && donate.length === 0) return;

  if (donate === "yes") {
    alert(
      "Thank you for wanting to donate, you're a life saver! We will be in touch soon " +
        capitalizeFirstLetter(name) +
        "! ☀️"
    );
  } else {
    alert(
      "Ah not to worry, there's always another time " +
        capitalizeFirstLetter(name) +
        "...🥰"
    );
  }
}

let button = document.querySelector("button");
button.addEventListener("click", donate);

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["Hello,"];
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h2").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 250);
    } else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 200);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

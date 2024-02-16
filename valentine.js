function presentValentine() {
  let dog = $(
    `<img id="dog" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dgenwdc-51828326-bf88-446f-b276-93bad0f98c3e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGdlbndkYy01MTgyODMyNi1iZjg4LTQ0NmYtYjI3Ni05M2JhZDBmOThjM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-8z-qY9RDUppFxnq6BGMcTRItG1D6Os1VreCFgvjC5k">`
  );
  $("#main-square").append(dog);
  let corny = $(
    `<div id="corny">You make my heart skip a <span id="byte">byte</span>!</div>`
  );
  $("#main-square").append(corny);

  let question = $(`<div id="question">Will you be my valentine?</div>`);
  $("#main-square").append(question);

  let response = $(
    `<div id="response"><div id="yes-button"><button id="yes">Yes</button></div><div id="no-button"><button id="no">No</button></div></div>`
  );
  $("#main-square").append(response);

  $("#yes").click(function () {
    accept();
  });

  $("#no").click(function () {
    reject($("#no-button"), $("#yes"));
  });
}

function accept() {
  $("#corny").remove();
  $("#question").remove();
  $("#response").remove();
  $("#dog").remove();

  let cat = $(
    `<img id="dog" src="https://66.media.tumblr.com/tumblr_m9wlsrDL721rfjowdo1_500.gif">`
  );

  $("#main-square").append(cat);
  let yay = $(
    `<div id="yay">YAYYYYYYYYY! <span id="happy">I'm a very happy girl!</span></div>`
  );

  $("#main-square").append(yay);
}

function reject(element1, element2) {
  var randomTop = Math.floor(
    Math.random() * ($(window).height() - $(element1).height())
  );
  var randomLeft = Math.floor(
    Math.random() * ($(window).width() - $(element1).width())
  );

  // Get the position of the "Yes" button
  var yesButtonPosition = $("#yes-button").offset();
  var yesButtonWidth = $("#yes-button").width();
  var yesButtonHeight = $("#yes-button").height();

  // Ensure the "No" button doesn't overlap with the "Yes" button
  if (
    randomLeft < yesButtonPosition.left + yesButtonWidth &&
    randomLeft + $(element1).width() > yesButtonPosition.left &&
    randomTop < yesButtonPosition.top + yesButtonHeight &&
    randomTop + $(element1).height() > yesButtonPosition.top
  ) {
    // If overlap, adjust the position
    randomLeft = yesButtonPosition.left + yesButtonWidth + 10;
    randomTop = yesButtonPosition.top + 10;
  }

  $(element1).css({
    position: "absolute",
    top: randomTop + "px",
    left: randomLeft + "px",
  });

  let currentWidth = element2.width();
  let currentHeight = element2.height();

  $(element2).css({
    width: currentWidth + 50,
    height: currentHeight + 30,
  });
}

$(document).ready(function () {
  $("#start").click(function () {
    $("#hello-message").remove();
    $("#start").remove();
    $("#cat-gif").remove();
    presentValentine();
  });
});

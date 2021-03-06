window.onload = function () {
  try {
    var bigIconContainer = document.getElementById("big-icon");
  }
  catch (err) {
    var bigIconContainer = false;
  }

  if (bigIconContainer) {
    var bigIcon = bigIconContainer.childNodes[0];

    var entries = [{ id: "fictions-link", icon: "icon-book-alt2" }, { id: "writings-link", icon: "icon-pencil" }, { id: "translation-link", icon: "icon-earth" }, { id: "coding-link", icon: "icon-embed2" }];

    entries.forEach(function (entry) {
      var link = document.getElementById(entry.id);
	  
	  function onEntrance() {
        bigIcon.className = entry.icon;
		bigIconContainer.style.opacity = "1.0";
      };
	  
	  function onOut() {
		bigIconContainer.style.opacity = "0.0";
      }
		  
      link.addEventListener("mouseover", onEntrance );
	  link.addEventListener("focus", onEntrance );

      link.addEventListener("mouseout", onOut );
	  link.addEventListener("blur", onEntrance );
    });
  }

  var aboutButton = document.getElementById("about-button");
  var aboutText = document.getElementById("about-text");
  var nameBig = document.getElementById("name-big");
  var aboutBackOne = document.getElementById("about-back-up");
  var aboutBackTwo = document.getElementById("about-back-down");
  var aboutBacks = [aboutBackOne, aboutBackTwo];

  aboutButton.addEventListener("click", function () {
    aboutButton.style.display = "none";
    nameBig.style.display = "none";
    aboutText.style.display = "block";
  });
  aboutBacks.forEach(function (aboutBack) {
    aboutBack.addEventListener("click", function () {
      aboutButton.style.display = "inline";
      nameBig.style.display = "block";
      aboutText.style.display = "none";
    });
  });
};

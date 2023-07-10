let allControlDivs = document.querySelectorAll(".control-box");
let currentControlDiv = allControlDivs[0];

var fonts = [
  "Coemeter",
  "Crowlista Mono",
  "Crowlista Mono Italic",
  "Arsens"
];

// function changeFont() {
//   var randomFont = fonts[Math.floor(Math.random() * fonts.length)];

//   if (document.body.style.fontFamily !== randomFont) {
//     document.body.style.fontFamily = randomFont;
//   } else {
//     changeFont(); // Call the function again if the same font is already applied
//   }
// }

function initEvents() {
  window.addEventListener('scroll', function () {
    shrinkHeader();
  });
}

function changeClass() {
  var aboutElement = document.getElementById("about");
  var mailElements = document.getElementsByClassName("mail");

  aboutElement.addEventListener("click", function () {
    for (var i = 0; i < mailElements.length; i++) {
      mailElements[i].classList.toggle("clickable");
    }
  });
}


document.getElementById("titrebuldoz").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutbuldoz");
  description.style.opacity = "1";
});

document.getElementById("titrebuldoz").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutbuldoz");
  description.style.opacity = "0";
});


document.getElementById("titre555").addEventListener("mouseover", function() {
  var description = document.getElementById("about555");
  description.style.opacity = "1";
});

document.getElementById("titre555").addEventListener("mouseout", function() {
  var description = document.getElementById("about555");
  description.style.opacity = "0";
});

  
document.getElementById("titreagora").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutagora");
  description.style.opacity = "1";
});

document.getElementById("titreagora").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutagora");
  description.style.opacity = "0";
});

 
document.getElementById("titrefievre").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutfievre");
  description.style.opacity = "1";
});

document.getElementById("titrefievre").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutfievre");
  description.style.opacity = "0";
});


document.getElementById("titresuizpacio").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutsuizpacio");
  description.style.opacity = "1";
});

document.getElementById("titresuizpacio").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutsuizpacio");
  description.style.opacity = "0";
});

document.getElementById("titrepaisajes").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutpaisajes");
  description.style.opacity = "1";
});

document.getElementById("titrepaisajes").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutpaisajes");
  description.style.opacity = "0";
});


document.getElementById("titrefonts").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutfonts");
  description.style.opacity = "1";
});

document.getElementById("titrefonts").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutfonts");
  description.style.opacity = "0";
});


document.getElementById("titrecoemeter").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutcoemeter");
  description.style.opacity = "1";
});

document.getElementById("titrecoemeter").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutcoemeter");
  description.style.opacity = "0";
});


document.getElementById("titrefigo").addEventListener("mouseover", function() {
  var description = document.getElementById("aboutfigo");
  description.style.opacity = "1";
});

document.getElementById("titrefigo").addEventListener("mouseout", function() {
  var description = document.getElementById("aboutfigo");
  description.style.opacity = "0";
});



  document.getElementById("about").addEventListener("click", function() {
    var description = document.getElementById("aboutgeneral");
    var currentOpacity = parseFloat(description.style.opacity);
  
    if (currentOpacity === 1) {
      description.style.opacity = "0";
      // description.style.pointerEvents = "all";
    } else {
      description.style.opacity = "1";
      // description.style.pointerEvents = "none";
    }

  })


document.addEventListener('DOMContentLoaded', () => {
  // Get all the section elements
  const sections = document.querySelectorAll('.section');

  // Calculate the nearest scroll snap point
  let nearestDistance = Infinity;
  let nearestSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.left - window.innerWidth / 2);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestSection = section;
    }
  });

  // Scroll to the nearest section
  if (nearestSection) {
    nearestSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

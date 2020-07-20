import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/87208731_3222218721140958_2040188570307657728_n.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_ohc=fxX-WgRUXkoAX8nGYM1&_nc_ht=scontent-mia3-2.xx&oh=02cdb0c0f786a3c3c5e2a3fd557ba5cf&oe=5F39BCC2",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-0/p526x296/110222856_3594275113935315_8034784431570298798_n.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=JO-xM2jjpNMAX8A9pSB&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=18c8af0fb5715d0d21845ff8eaef2706&oe=5F3B3A5A",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};

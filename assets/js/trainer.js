// Skeleton
const skeletonMentorsContainer = document.getElementById(
  "lspp__mentors_skeleton",
);
renderSkeletons(skeletonMentorsContainer, 8);

fetch(
  "https://strapi.lftechnology.com/api/mentors?populate=photo&sort=name:ASC",
)
  .then((mentors) => mentors.json())
  .then((mentors) => {
    document.getElementById("trainer-container").innerHTML = mentors.data
      .map((mentor) => {
        return `
         <div class="card card--trainers card--gn">
            <div class="card__box-image">
              <img
                src="https://strapi.lftechnology.com${mentor.attributes.photo?.data?.attributes.url}"
                alt="${mentor.attributes.name}"
                class="card__image"
              />
            </div>
            <div class="card__content">
              <h2 class="card__title card__title--trainer">${mentor.attributes.name}</h2>
              <span class="card__designation student-subtitle"
                >${mentor.attributes.designation}</span
              >
            </div>
            <div class="card__overlay">
              <div class="card__overlay--content">
                <h2 class="card__overlay--heading">${mentor.attributes.name}</h2>
                <span class="card__overlay--subtitle">${mentor.attributes.designation}</span>
                <p class="card__overlay--brief">
                 ${mentor.attributes.description}
                </p>
                <a
                  href="${mentor.attributes.linkedinUrl}"
                  class="card__overlay--icon"
                  target="_blank"
                >
                  <img
                    src="./assets/images/icons/linkedin.png"
                    alt="Linkedin"
                  />
                </a>
              </div>
            </div>
        </div>
      `;
      })
      .join("");
  })
  .catch((err) => console.error(err))
  .finally(() => {
    skeletonMentorsContainer.innerHTML = "";
  });

// Show skeleton
const skeletonStudentsContainer = document.getElementById("lspp__students_skeleton");
renderSkeletons(skeletonStudentsContainer, 8);

fetch(
  "https://strapi.lftechnology.com/api/lspp-students?populate=students,students.photo"
)
  .then((students) => students.json())
  .then((students) => {
    /**
     * Populate (years)
     */
    const dataLen = students.data.length;
    document.getElementById("navtab").innerHTML = students.data
      .map((student, index) => {
        return `
        <button class="tablinks ${dataLen - 1 === index ? "active" : ""
          }" onclick="openTab(event,'Tab${index}')">${student.attributes.year
          }</button>`;
      })
      .join("");

    /**
     * Populate students year wise
     */
    document.getElementById("lspp__students").innerHTML = students.data
      .map((studentsYearWise, index) => {
        return `
           <div id="Tab${index}" class="tabcontent" style="display: ${dataLen - 1 === index ? "block" : "none"
          }">
          <div class="trainer-section__content trainer-section__content--student">
             ${studentsYearWise.attributes.students
            .map(
              (student) => `
                  <div class="card card--trainers card--gn">
                    <div class="card__box-image">
                      <img
                        src="https://strapi.lftechnology.com${student.photo.data.attributes.url}"
                        alt="${student.name}"
                        class="card__image"
                      />
                    </div>
                    <div class="card__content">
                      <h2 class="card__title card__title--trainer">
                        ${student.name}
                      </h2>
                      <span class="card__designation student-subtitle">
                        ${student.college}
                      </span>
                    </div>
                    <div class="card__overlay">
                      <div class="card__overlay--content">
                        <h2 class="card__overlay--heading">${student.name}</h2>
                        <span class="card__overlay--subtitle">
                          ${student.college}
                        </span>
                        <p class="card__overlay--brief">
                          ${student.bio}
                        </p>
                        <a
                          href="${student.linkedin}"
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
                `
            )
            .join("")}
            </div>
           </div>
        `;
      })
      .join("");
  })
  .catch((error) => console.error(error))
  .finally(() => {
    skeletonStudentsContainer.innerHTML = "";
  });

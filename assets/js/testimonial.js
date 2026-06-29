fetch(
  "https://strapi.lftechnology.com/api/lspp-testimonials?populate=photo&sort=batch:DESC",
)
  .then((data) => data.json())
  .then((testimonials) => {
    document.getElementById("lspp__testimonial").innerHTML = testimonials.data
      .map((testimonial) => {
        return `
            <div class="swiper-slide testimonial-section__item">
              <div class="testimonial-image">
                <img
                  src="https://strapi.lftechnology.com${testimonial.attributes.photo?.data?.attributes.url}"
                  alt="${testimonial.attributes.name}"
                  class="card__image"
                />
              </div>
              <div class="testimonial__content">
                <p class="testimonial__text">
                 ${testimonial.attributes.description}
                </p>
                <h2 class="testimonial__name">${testimonial.attributes.name}</h2>
                <span class="testimonial__batch">${testimonial.attributes.batch}</span>
              </div>
            </div>
        `;
      })
      .join("");
  });

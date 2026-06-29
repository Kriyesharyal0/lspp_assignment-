fetch("https://strapi.lftechnology.com/api/lspp-statuses/")
  .then((data) => data.json())
  .then((data) => {
    document.getElementById("apply__now").innerHTML = data.data[0].attributes.isOpen
      ? `
             <a
                class="apply_now"
                href="${data.data[0].attributes.link}"
                target="_blank"
             >
                  <span>Apply now</span>
                  <img src="/assets/images/right_arrow.png" alt="Right Arrow" />
             </a>
        `
      : null;
  });

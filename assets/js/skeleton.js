function renderSkeletons(skeletonContainer, count = 4) {
    skeletonContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const card = document.createElement("div");
        card.className = "skeleton-card";

        card.innerHTML = `
      <div class="skeleton-box skeleton-img"></div>
      <div class="skeleton-box skeleton-title"></div>
      <div class="skeleton-box skeleton-line"></div>
      <div class="skeleton-box skeleton-line"></div>
    `;
        skeletonContainer.appendChild(card);
    }
}

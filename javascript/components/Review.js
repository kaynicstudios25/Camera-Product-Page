export function CustomerCard({ name, review, date, rating = 5, avatar }) {

  // Build star spans based on the rating value (0–5)
  function buildStars(count) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="fa fa-star${i <= count ? ' checked' : ''}"></span>`;
    }
    return stars;
  }

  return `
    <div class="customerCard">
      <div class="custrating">
        ${avatar ? `<img src="${avatar}" alt="${name} profile picture">` : ''}
        <div class="details">
          <p>${name}</p>
          <div class="starRate">
            ${buildStars(rating)}
          </div>
        </div>
      </div>
      <p>${review}</p>
      <p class="date">${date}</p>
    </div>
  `;
}
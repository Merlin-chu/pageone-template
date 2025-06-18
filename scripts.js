const likeBtn = document.querySelector('.like-btn');
const likeCount = document.querySelector('.like-count');
let count = 0;

likeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  count++;
  likeCount.textContent = count;
  this.classList.toggle('liked');
});

const lineSpacingRange = document.getElementById('lineSpacingRange');

lineSpacingRange.addEventListener('input', function() {
  const lineSpacingValue = this.value;
  document.body.style.lineHeight = lineSpacingValue;
  const cardElements = document.querySelectorAll('.card');
  cardElements.forEach(card => {
    card.style.lineHeight = lineSpacingValue;
  });
});
//  Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar
const totalLove = document.getElementById('total-love');
let loveCount = 0;

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('ri-heart-line')) {
    loveCount++;
    totalLove.innerText = loveCount;
    e.target.classList.add('btn-disabled');
  }
});

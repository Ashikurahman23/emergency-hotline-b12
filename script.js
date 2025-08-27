const totalLove = document.getElementById('total-love');
let loveCount = 0;
document.querySelector('main').addEventListener('click', function (e) {
  if (e.target.className.includes('ri-heart-line')) {
    loveCount++;
    totalLove.innerText = loveCount;
  }
});

const totalCopy = document.getElementById('total-copy');
let copyCount = 0;
document.querySelector('main').addEventListener('click', function (e) {
  if (e.target.className.includes('copy-btn')) {
    const serviceNumber =
      e.target.parentNode.parentNode.children[1].children[2].innerText;

    alert(`Number Copied ${serviceNumber}`);
    navigator.clipboard.writeText(serviceNumber);
    copyCount++;
    totalCopy.innerText = copyCount;
  }
});

const perCall = 20;
document.querySelector('main').addEventListener('click', function (e) {
  if (e.target.className.includes('call-button')) {
    let totalCoins = parseInt(document.getElementById('total-coin').innerText);

    if (totalCoins < perCall) {
      alert("You don't have available coin");
      return;
    }
    displayCoins = totalCoins - perCall;
    document.getElementById('total-coin').innerText = displayCoins;

    const serviceName =
      e.target.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      e.target.parentNode.parentNode.children[1].children[2].innerText;
    alert(`Calling ${serviceName} ${serviceNumber}`);

    const now = new Date();
    const callList = document.querySelector('.call-history');
    const callItem = document.createElement('div');
    callItem.className =
      'flex justify-between items-center bg-neutral-100 gap-3 rounded-xl shadow p-4 mt-4';
    callItem.innerHTML = `
    <div class="">
          <h4 class="text-xl font-bold">${serviceName}</h4>
          <p class="text-neutral-600">${serviceNumber}</p>
        </div>
        <p class='text-sm'>${now.toLocaleTimeString()}</p>
    
    `;
    callList.append(callItem);
  }
});

document.getElementById('clear-btn').addEventListener('click', function () {
  const callList = document.querySelector('.call-history');
  callList.innerHTML = '';
});

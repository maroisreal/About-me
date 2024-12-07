const counterDiv = document.getElementById('visitor-counter');
let visitCount = localStorage.getItem('visitCount');

if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem('visitCount', visitCount);
counterDiv.textContent = `The number of visits to this page: ${visitCount}`;

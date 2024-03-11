 const one = document.querySelector('.fisrt');
const secon = document.getElementById('seconds');
const therr = document.getElementById('fours');

one.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'LI') {
    const image = target.getAttribute('data-image');
    const content = target.getAttribute('data-content');
    secon.src = image;
    therr.textContent = content;
  }
});
document.getElementById(".form").addEventListener("click", function() {
  // Ẩn form gym
  document.getElementById("form").style.display = "none";
  // Hiển thị form login
  document.getElementById("form-login").style.display = "block";
});
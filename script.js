/* SIDEBAR TOGGLE */
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

/* PARTICLE BACKGROUND */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

let particles = [];

for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 1 + Math.random() * 2.5,
    speedX: (Math.random() - 0.5) * 0.6,
    speedY: (Math.random() - 0.5) * 0.6
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ffffff";
    ctx.fillStyle = "#ffffff";

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", resizeCanvas);


const canvas = document.getElementById('neuralCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 3;
    this.speedY = (Math.random() - 0.5) * 3;
    this.color = 'rgba(' + Math.floor(Math.random() * 256) + ',' + 
                         Math.floor(Math.random() * 256) + ',' + 
                         Math.floor(Math.random() * 256) + ', 0.7)';
    this.trail = []; // Track the path for trails
}

Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98; // Gradually shrink the size
    
    // Add the current position to the trail for creating the effect
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 10) { // Limit the trail length
        this.trail.shift();
    }
};

Particle.prototype.draw = function() {
    // Draw the trail effect first
    for (let i = 0; i < this.trail.length; i++) {
        const opacity = (i + 1) / this.trail.length; // Make older parts more transparent
        ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
        ctx.beginPath();
        ctx.arc(this.trail[i].x, this.trail[i].y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Finally draw the particle at its latest position
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function animateParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.1) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function createParticle(event) {
    const xPos = event.x;
    const yPos = event.y;

    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

canvas.addEventListener('mousemove', createParticle);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animateParticles();
    requestAnimationFrame(animate);
}

animate();





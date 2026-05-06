// Fondo de partículas cuánticas con efecto Glow
const canvas = document.getElementById('quantum-bg');
const ctx = canvas.getContext('2d');
const wrapper = document.getElementById('quantum-zone');

let stars = [];
const numStars = 120; // Ajusta este número para más o menos partículas

function resizeCanvas() {
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
}

class Star {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        // Movimiento más fluido y lento
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        
        // Colores Kuantico
        const colors = ['#00f2ff', '#ff007a', '#ffffff', '#6a0dad'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.8 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Si salen de la zona, aparecen del otro lado
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // Efecto Resplandor (Glow)
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function initStars() {
    resizeCanvas();
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

// Escuchar cambios de tamaño de ventana
window.addEventListener('resize', () => {
    resizeCanvas();
    // Reubicar estrellas si la pantalla cambia de tamaño
    stars.forEach(star => {
        if(star.x > canvas.width) star.x = Math.random() * canvas.width;
        if(star.y > canvas.height) star.y = Math.random() * canvas.height;
    });
});

// Iniciar cuando el HTML esté completamente cargado y la zona tenga altura
window.addEventListener('load', () => {
    initStars();
    animate();
});


particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 }, // Cuántos puntos quieres
    "color": { "value": "#4db8ff" }, // Color azul claro de IP
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true, // Esto crea la "red" (líneas que unen puntos)
      "distance": 150,
      "color": "#4db8ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Velocidad de movimiento
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Se conectan al pasar el mouse
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});

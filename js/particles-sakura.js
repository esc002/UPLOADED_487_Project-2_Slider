
        document.addEventListener("DOMContentLoaded", function() {
            console.log("Script is running"); // Add this line for debugging
            particlesJS('particles', {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 600 } },
                    color: { value: "#ffffff" },
                    shape: {
                        type: "image",
                        image: { src: "./images/sakura.png", width: 100, height: 100 }
                    },
                    opacity: { value: 0.5, random: false },
                    size: { value: 5, random: true, anim: { enable: true, speed: 150, size_min: 4 } },
                    move: { enable: true, speed: 6, direction: "bottom-left", random: true, straight: false, out_mode: "out" },
                    line_linked: { enable: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: false },
                        resize: true
                    },
                    modes: {
                        repulse: { distance: 100, duration: 10 }
                    }
                },
                retina_detect: true
            });
        });

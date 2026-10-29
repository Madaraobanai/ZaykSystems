document.addEventListener("DOMContentLoaded", function () {
    // Lógica do Slider Automático e Bolinhas
    const track = document.getElementById("sliderTrack");
    if (track) {
        const slides = track.querySelectorAll(".slider-slide");
        const dots = document.querySelectorAll(".slider-dots .dot");
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % totalSlides;
            updateSlider(nextIndex);
        }

        setInterval(nextSlide, 2500);
    }

    // Lógica do Acordeão do FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");

        questionBtn.addEventListener("click", () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    // Animação de subida suave ao chegar na secção do FAQ
    const faqSection = document.getElementById("faqSection");
    if (faqSection) {
        const wrapper = faqSection.querySelector(".faq-card-wrapper");
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    wrapper.classList.add("fade-in-up");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(faqSection);
    }
});

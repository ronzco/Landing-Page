document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderItems = document.querySelectorAll(".product-card");
    const btnLeft = document.querySelector(".slider-btn.left");
    const btnRight = document.querySelector(".slider-btn.right");
    const itemsToShow = 3; // Jumlah item yang terlihat sekaligus
    let currentIndex = 0;

    const slideWidth = sliderItems[0].offsetWidth + 20; // Lebar item + gap

    const updateSliderPosition = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    btnLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    btnRight.addEventListener("click", () => {
        if (currentIndex < sliderItems.length - itemsToShow) {
            currentIndex++;
            updateSliderPosition();
        }
    });
    
});
// JavaScript untuk toggle dark mode dan mengubah ikon
document.getElementById("theme-toggle").addEventListener("click", function() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    
    // Toggle dark mode class di body
    body.classList.toggle("dark-mode");

    // Ubah ikon sesuai dengan mode aktif
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("bi-moon-stars");
        themeIcon.classList.add("bi-sun");
    } else {
        themeIcon.classList.remove("bi-sun");
        themeIcon.classList.add("bi-moon-stars");
    }
});


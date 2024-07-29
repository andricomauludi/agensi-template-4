document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `./${currentPath}`) {
      link.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const counterValue = document.getElementById('section-product-counter-value');
  const incrementButton = document.getElementById('section-product-increment');
  const decrementButton = document.getElementById('section-product-decrement');
  const priceElement = document.getElementById('section-product-price');
  const basePrice = 10.00;

  function updatePrice() {
    const quantity = parseInt(counterValue.textContent);
    const totalPrice = (basePrice * quantity).toFixed(2);
    priceElement.textContent = `$${totalPrice}`;
  }

  incrementButton.addEventListener('click', () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    updatePrice();
  });

  decrementButton.addEventListener('click', () => {
    const currentValue = parseInt(counterValue.textContent);
    if (currentValue > 1) {
      counterValue.textContent = currentValue - 1;
      updatePrice();
    }
  });

  // Initial price update
  updatePrice();
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".nav-link");
  const backToTopButton = document.getElementById("back-to-top");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Back to Top button functionality
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});



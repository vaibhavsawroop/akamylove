// JavaScript for swipe navigation
let currentPage = 1;
const totalPages = 13;

// Function to show a page
function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach((page, index) => {
    page.classList.remove("active");
  });
  document.getElementById(`page-${pageNumber}`).classList.add("active");

  // Optional: Add a heart animation effect during page transitions
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

// Function to handle swipe gestures
let startX = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) return;
  const endX = event.touches[0].clientX;
  const diffX = startX - endX;

  if (diffX > 50) {
    // Swipe left (Next page)
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  } else if (diffX < -50) {
    // Swipe right (Previous page)
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  }
  startX = 0;
}

// Attach touch event listeners
document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);

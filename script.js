// Open Modal
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
  
    modal.style.display = "flex";
    modalImage.src = imageSrc;
  }
  
  // Close Modal
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
//script (function) which is gonna help to open and close modal window on click
function runModalWindow() {
   const shoppingCart = document.querySelector(".shopping-cart");
   const modal = document.querySelector(".modal");
   const closeModal = document.querySelector(".modal__close");


   shoppingCart.addEventListener("click", toggleModal);

   closeModal.addEventListener("click", toggleModal);

   function toggleModal() {
      modal.classList.toggle("open-modal");
   }
}
runModalWindow();

//activate WOW.js
new WOW({ mobile: false }).init();




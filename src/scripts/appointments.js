const removeButtons = document.querySelectorAll(".remove-appointment");

removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("li").remove();
  });
});

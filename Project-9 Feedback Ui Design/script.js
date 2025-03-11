document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  const button = document.querySelector("button");
  const feedbackText = document.getElementById("thank-prg");

  let selectedFeedback = "";

  // Handle feedback selection
  boxes.forEach(box => {
      box.addEventListener("click", function () {
          boxes.forEach(b => b.classList.remove("selected"));
          this.classList.add("selected");
          selectedFeedback = this.querySelector("p").textContent;
      });
  });

  // Handle button click to save feedback
  if (button) {
      button.addEventListener("click", function (event) {
          if (selectedFeedback) {
              localStorage.setItem("feedback", selectedFeedback);
          } else {
              alert("Please select a feedback option first!");
              event.preventDefault(); // Prevent navigation if no selection
          }
      });
  }

  // Display feedback on the Thank You page
  if (feedbackText) {
      const savedFeedback = localStorage.getItem("feedback");
      if (savedFeedback) {
          feedbackText.innerHTML = `Your feedback: <strong>${savedFeedback}</strong> <br><br> We'll use your feedback to improve our customer support`;
      } else {
          feedbackText.innerHTML = "No feedback received.";
      }
  }
});

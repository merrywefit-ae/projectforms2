// JavaScript source code
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));

    this.classList.add("active");

    const tabBg = document.querySelector(".tab-bg");
    tabBg.style.left = this.offsetLeft + "px";
    tabBg.style.width = this.offsetWidth + "px";
  });
});

document
  .querySelector(".password-toggle")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    const eyeIcon = this.querySelector("i");
    if (type === "text") {
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });

  function addTaskEntry() {
  const container = document.createElement('div');
  container.classList.add('task-entry');

  container.innerHTML = `
    <button type="button" class="remove-btn" onclick="removeTask(this)">✖</button>
    <label>Task No:</label>
    <select name="Task No[]" required>
      <option value="" disabled selected>Select Task</option>
      <option value="T01">T01</option>
      <option value="T02">T02</option>
      <option value="T03">T03</option>
    </select>
    <label>Task Description:</label>
    <input type="text" name="Task Description[]" required>
  `;

  document.getElementById('tasksContainer').appendChild(container);
}

function removeTask(button) {
  button.parentElement.remove();
}
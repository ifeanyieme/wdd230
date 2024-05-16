function validateForm() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (password !== confirm_password) {
      alert("Passwords do not match. Please try again.");
      document.getElementById("password").value = "";
      document.getElementById("confirm_password").value = "";
      document.getElementById("password").focus();
      return false;
    }
    return true;
  }
  
  function updateValue(val) {
    document.getElementById("rating_value").textContent = val;
  }
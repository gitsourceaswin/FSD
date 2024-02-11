function toggleForm(formId) {
    document.getElementById('login-form').style.display = formId === 'login-form' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = formId === 'signup-form' ? 'block' : 'none';
  }
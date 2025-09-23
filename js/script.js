const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// contacts us box

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form from submitting immediately

    let isValid = true;

    // Clear previous errors
    document
      .querySelectorAll('.error-message')
      .forEach((el) => (el.textContent = ''));
    document
      .querySelectorAll('input, textarea')
      .forEach((el) => el.classList.remove('error'));

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
      isValid = false;
      name.classList.add('error');
      document.getElementById('nameError').textContent = 'Name is required';
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
      isValid = false;
      email.classList.add('error');
      document.getElementById('emailError').textContent = 'Email is required';
    } else if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      email.classList.add('error');
      document.getElementById('emailError').textContent =
        'Enter a valid email address';
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
      isValid = false;
      message.classList.add('error');
      document.getElementById('messageError').textContent =
        'Message cannot be empty';
    }

    // If everything is valid
    if (isValid) {
      alert('Form submitted successfully!');
      // form can be submitted to server here
      // this.submit();
    }
  });

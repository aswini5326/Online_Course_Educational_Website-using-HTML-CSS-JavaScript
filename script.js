let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
  accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
  accountForm.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });
  
  var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

   // Contact form validation and local storage
const contactForm = document.querySelector('.contact form');
const nameInput = contactForm.querySelector('input[placeholder="name"]');
const emailInput = contactForm.querySelector('input[placeholder="email"]');
const phoneInput = contactForm.querySelector('input[placeholder="phone"]');
const messageInput = contactForm.querySelector('textarea[placeholder="message"]');

contactForm.onsubmit = (e) => {
  e.preventDefault(); // Prevent default form submission

  // Validate inputs
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  if (phoneInput.value.trim() === '' || isNaN(phoneInput.value) || phoneInput.value.length < 10) {
    alert('Please enter a valid phone number (at least 10 digits).');
    phoneInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return;
  }

  // Save to local storage
  const contactData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem('contactData', JSON.stringify(contactData));

  // Clear the form and notify user
  alert('Your message has been sent successfully!');
  contactForm.reset();
};

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};

const openDialogBtn = document.getElementById('openDialogBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const dialog = document.getElementById('dialog');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleSignup = document.getElementById('toggleSignup');
const toggleLogin = document.getElementById('toggleLogin');

openDialogBtn.addEventListener('click', () => {
  dialog.style.display = 'block';
});

closeDialogBtn.addEventListener('click', () => {
  dialog.style.display = 'none';
});

toggleSignup.addEventListener('click', () => {
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
});

toggleLogin.addEventListener('click', () => {
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
});


var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("buy-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    modal.style.display = "none";
    alert("Data has been successfully submitted!");
});


window.onload = function() {
  if (!sessionStorage.getItem('dialogOpened')) {
      const openDialogButton = document.getElementById('open-dialog');
      const dialogBackground = document.getElementById('dialog-background');
      const dialogBox = document.getElementById('dialog-box');

      openDialogButton.addEventListener('click', () => {
          dialogBackground.style.display = 'block';
          dialogBox.style.display = 'block';
          document.body.classList.add('no-scroll');
          sessionStorage.setItem('dialogOpened', true);
      });

      dialogBackground.addEventListener('click', () => {
          dialogBackground.style.display = 'none';
          dialogBox.style.display = 'none';
          document.body.classList.remove('no-scroll');
      });
  }
};


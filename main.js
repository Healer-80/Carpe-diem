(function () {
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB79euw8NtFWlD4DXrcH5sHslLUdN7S4Vs",
    authDomain: "carpe-diem-5b9d6.firebaseapp.com",
    databaseURL: "https://carpe-diem-5b9d6.firebaseio.com",
    projectId: "carpe-diem-5b9d6",
    storageBucket: "carpe-diem-5b9d6.appspot.com",
    messagingSenderId: "452338796470",
    appId: "1:452338796470:web:fe147c19c515aca424a317"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var table = database.ref('/');
  
  const sendContactData = ({ name, phone, email }) => {
    table.push({
      name: '',
      email: '',
      phone: '',
    });
  };
// submit Form
   const onSubmitForm = event => {
    if (event.preventDefault) event.preventDefault();

    const successMessage = document.getElementById('successMessage');

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    sendContactData({ name, phone, email });

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }, 5000);
    
    return false;
  }

  const form = document.querySelector('#contactsForm');

  if (form.attachEvent) {
    form.attachEvent('submit', onSubmitForm);
  } else {
    form.addEventListener('submit', onSubmitForm);
  }

}());

(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyB79euw8NtFWlD4DXrcH5sHslLUdN7S4Vs",
    authDomain: "carpe-diem-5b9d6.firebaseapp.com",
    databaseURL: "https://carpe-diem-5b9d6.firebaseio.com",
    projectId: "carpe-diem-5b9d6",
    storageBucket: "carpe-diem-5b9d6.appspot.com",
    messagingSenderId: "452338796470",
    appId: "1:452338796470:web:fe147c19c515aca424a317"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const table = database.ref('/');
  const form = document.getElementById('contactsForm');

  const sendContactData = ({ name, phone, email }) => {
    table.push({
      name,
      email,
      phone,
    });
  };

  const onSubmitForm = event => {
    if (event.preventDefault) event.preventDefault();
    const successMessage = document.getElementById('successMessage');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    sendContactData({ name, phone, email });

    form.reset();

    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }, 5000);
    
    return false;
  }

  if (form.attachEvent) {
    form.attachEvent('submit', onSubmitForm);
  } else {
    form.addEventListener('submit', onSubmitForm);
  }

}());

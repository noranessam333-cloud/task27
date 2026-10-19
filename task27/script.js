document.getElementById('infoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  console.log('Form Submitted Data:', { name, email, phone });
  alert('تم الانتقال للخطوة التالية بنجاح!');
});
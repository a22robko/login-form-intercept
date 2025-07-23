document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('message');

  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    msg.textContent = data.message;
    msg.style.color = res.ok ? 'green' : 'red';
  } catch (err) {
    msg.textContent = 'Network error';
    msg.style.color = 'red';
  }
});

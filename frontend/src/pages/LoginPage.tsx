function LoginPage() {
  return (
    <section>
      <h1>Login / Register</h1>
      <form className="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <form className="auth-form">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default LoginPage;
/* Temp Login de test*/
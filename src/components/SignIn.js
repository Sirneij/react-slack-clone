import React from "react";

export default function SignIn() {
  return (
    <main className="channel-container">
      <section className="form-container top-2">
        <form action="." className="create-form">
          <h3 className="form-header centered">Sign in or Create an Account</h3>
          <small className="brief-description centered">
            Signin into your account or register using your Google account.
          </small>
          <div className="footer-bottons centered">
            <button type="submit" className="btn btn-primary">
              Signin with Google
            </button>
            <button type="submit" className="btn btn-primary">
              Register with Google
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

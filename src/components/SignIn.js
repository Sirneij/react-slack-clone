import React from "react";

export default function SignIn() {
  return (
    <main className="channel-container">
      <section className="form-container">
        <form action="." className="create-form">
          <h3 className="form-header centered">Sign in or Create an Account</h3>
          <small className="brief-description">
            Signin into your account or register using your Google account.
          </small>
          <button type="submit" className="btn btn-primary btn-small-margin">
            Signin or Register with Google
          </button>
        </form>
      </section>
    </main>
  );
}

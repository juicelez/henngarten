"use client"; // Mark as client component

export default function Contactform() {
  return (
    <section id="contactform">
      <div className="container w-lg-75 p-md-5 my-5 d-flex flex-column">
        <h2 className="h1 fw-bold mb-5">Ihr Kontakt zu uns</h2>

        <form
          id="contact-form"
          action="https://api.sendinblue.com/v3/forms/YOUR_FORM_ID/contacts"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label forhtml="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label forhtml="phone">Telefonnummer</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label forhtml="message">Nachricht</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary text-white">
            abschicken
          </button>
        </form>
      </div>
    </section>
  );
}

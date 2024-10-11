import "./contact.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("mbljrkbz");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="subtitle"> contact us for more information </p>

      <div style={{ justifyContent: "space-around" }} className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              required
              className="email"
              name="email"
              type="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your message</label>
            <textarea
              required
              className="message"
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "submitting ... " : " submit "}
          </button>

          {state.succeeded && (
            <p
              className="flex "
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 45, marginLeft: 80 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully{" "}
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie className="contact-animation "
            style={{ height:355}}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
  /* function App() {
    return (
      <ContactForm />
    );
  }*/
};

export default Contact;

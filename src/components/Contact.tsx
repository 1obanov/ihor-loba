import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

interface FormStatus {
  message: string;
  type: "success" | "error" | "";
}

function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    type: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_9f04lmi",
        "template_mut5ty8",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "w8wB3ylHih_6--icS",
      );

      setFormStatus({
        message: "Thank you for reaching out! I'll get back to you soon.",
        type: "success",
      });

      setTimeout(() => {
        setFormStatus({ message: "", type: "" });
      }, 5000);

      reset();
    } catch {
      setFormStatus({
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <div className="headline">
              <span className="headline__subtitle">- Let's Connect</span>
              <h2 className="headline__title">Get in touch</h2>
            </div>
            <p className="contact__text">
              I'm open to new opportunities and collaborations. Feel free to
              reach out — I'm always happy to chat and see how I can help.
            </p>
            <ul className="contact-nav">
              <li className="contact-nav__item">
                <a className="contact-nav__link" href="tel:+48881291317">
                  +48 881 291 317
                </a>
              </li>
              <li className="contact-nav__item">
                <a
                  className="contact-nav__link"
                  href="mailto:ihor.loba@gmail.com"
                >
                  ihor.loba@gmail.com
                </a>
              </li>
              <li className="contact-nav__item">
                <a
                  className="contact-nav__link"
                  href="https://goo.gl/maps/dRMvLeSL5yBh2JyG9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cracow, Poland
                </a>
              </li>
            </ul>
          </div>
          <div className="contact__form">
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  aria-label="Name"
                  className="form__input"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="error">{errors.name.message}</span>
                )}
              </div>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email"
                  className="form__input"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>
              <div className="form__group">
                <textarea
                  placeholder="Write something..."
                  aria-label="message"
                  className="form__textarea"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <span className="error">{errors.message.message}</span>
                )}
              </div>
              <div className="form__group">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            {formStatus.message && (
              <div
                className={`form-status ${
                  formStatus.type === "success"
                    ? "form-status--success"
                    : "form-status--error"
                }`}
              >
                <p>{formStatus.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };

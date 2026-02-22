import { useEffect, useState, useRef } from "react";
import { TopBanner } from "../../components/common/TopBanner";
import BannerImage from "../../assets/ContactBanner.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CAPTCHA_CHARS = [
  { char: "P", color: "#e6a817" },
  { char: "X", color: "#C91526" },
  { char: "7", color: "#555" },
  { char: "M", color: "#1a3a5c" },
];

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const colors = [
    "#e6a817",
    "#C91526",
    "#555555",
    "#1a3a5c",
    "#2ecc71",
    "#8e44ad",
  ];
  return Array.from({ length: 4 }, () => ({
    char: chars[Math.floor(Math.random() * chars.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

function getCaptchaText(captchaArr) {
  return captchaArr.map(item => item.char).join('');
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(2, "Full Name must be at least 2 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)*\d{6,10}$/,
      "Enter a valid phone number"
    ),
  emailAddress: Yup.string()
    .required("Email Address is required")
    .email("Enter a valid email address"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters"),
  captchaInput: Yup.string()
    .required("Captcha input is required")
    .length(4, "Captcha must be 4 characters"),
});

export const ContactIndex = () => {
  const [captcha, setCaptcha] = useState(CAPTCHA_CHARS);
  const captchaTextRef = useRef(getCaptchaText(CAPTCHA_CHARS));

  const inputClass =
    "w-full bg-gray-100 rounded-md px-4 py-4 text-sm text-gray-500 placeholder-gray-400 outline-none border border-transparent focus:border-gray-300 transition";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Whenever captcha changes, update the text ref
  useEffect(() => {
    captchaTextRef.current = getCaptchaText(captcha);
  }, [captcha]);

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    captchaTextRef.current = getCaptchaText(newCaptcha);
  };

  return (
    <div>
      <TopBanner
        image={BannerImage}
        ischip={false}
        title={"CONTACT US"}
        description={
          "Custom team uniforms and corporate apparel for every need"
        }
      />

      <section className="w-full bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-5/12 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Glenroy Sports &amp; Trophies
            </h2>

            {/* ADDRESS */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  Address
                </span>
              </div>
              <p className="text-sm text-gray-700 pl-6">
                98 Wheatsheaf Rd Glenroy VIC
              </p>
            </div>

            {/* PHONES */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  Phones
                </span>
              </div>
              <p className="text-sm text-gray-700 pl-6">03 9300 1175</p>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  Mobile
                </span>
              </div>
              <p className="text-sm text-gray-700 pl-6">0422 120 775</p>
            </div>

            {/* ABN NUMBER */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  ABN Number
                </span>
              </div>
              <p className="text-sm text-gray-700 pl-6">17 5871 09539</p>
            </div>

            {/* MAIL */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  Mail
                </span>
              </div>
              <p className="text-sm text-gray-700 pl-6">
                glenroysports@outlook.com
              </p>
            </div>

            {/* TRADING HOURS */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C91526" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                </svg>
                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#C91526" }}
                >
                  Trading Hours:
                </span>
              </div>
              <div className="text-sm text-gray-700 pl-6 flex flex-col gap-0.5">
                <p>Monday to Friday: 9:30am - 5:30pm</p>
                <p>Saturday: 9:00am - 1:00pm</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="md:w-7/12 bg-white rounded-xl p-8 flex flex-col gap-4 shadow-sm">
            <Formik
              initialValues={{
                fullName: "",
                phoneNumber: "",
                emailAddress: "",
                message: "",
                captchaInput: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm, setFieldError }) => {
                const currentCaptcha = captchaTextRef.current;
                if (
                  values.captchaInput.trim().toUpperCase() !==
                  currentCaptcha.toUpperCase()
                ) {
                  setFieldError(
                    "captchaInput",
                    "Captcha does not match. Please try again."
                  );
                  setSubmitting(false);
                  refreshCaptcha();
                  return;
                }
                // Simulate form submission
                console.log("Form submitted:", values);
                setSubmitting(false);
                resetForm();
                refreshCaptcha();
              }}
              onReset={() => {
                refreshCaptcha();
              }}
            >
              {({
                isSubmitting,
                handleReset,
                errors,
                touched,
                setFieldTouched,
              }) => (
                <Form>
                  {/* Row 1: Full Name + Phone */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        className={inputClass}
                        onBlur={e => {
                          setFieldTouched("fullName", true);
                        }}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-xs text-red-600 mt-1 ml-1"
                      />
                    </div>
                    <div className="flex-1">
                      <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number*"
                        className={inputClass}
                        onBlur={e => {
                          setFieldTouched("phoneNumber", true);
                        }}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-xs text-red-600 mt-1 ml-1"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-2">
                    <Field
                      type="email"
                      name="emailAddress"
                      placeholder="Email Address*"
                      className={inputClass}
                      onBlur={e => setFieldTouched("emailAddress", true)}
                    />
                    <ErrorMessage
                      name="emailAddress"
                      component="div"
                      className="text-xs text-red-600 mt-1 ml-1"
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-2">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      rows={6}
                      className={`${inputClass} resize-none`}
                      onBlur={e => setFieldTouched("message", true)}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-xs text-red-600 mt-1 ml-1"
                    />
                  </div>

                  {/* Captcha Row */}
                  <div className="flex gap-3 items-center mt-2">
                    {/* Captcha Input */}
                    <div className="flex-1">
                      <Field
                        type="text"
                        name="captchaInput"
                        placeholder="Enter Captcha"
                        className={`${inputClass}`}
                        maxLength={4}
                        autoComplete="off"
                        onBlur={e => setFieldTouched("captchaInput", true)}
                      />
                      <ErrorMessage
                        name="captchaInput"
                        component="div"
                        className="text-xs text-red-600 mt-1 ml-1"
                      />
                    </div>

                    {/* Captcha Display */}
                    <div className="flex items-center justify-center bg-gray-100 rounded-md px-5 py-4 gap-1 flex-shrink-0 select-none">
                      {captcha.map((item, i) => (
                        <span
                          key={i}
                          className="text-2xl font-bold tracking-widest"
                          style={{
                            color: item.color,
                            fontStyle: i % 2 === 1 ? "italic" : "normal",
                            transform:
                              i % 3 === 0
                                ? "rotate(-8deg)"
                                : i % 3 === 1
                                  ? "rotate(6deg)"
                                  : "none",
                            display: "inline-block",
                          }}
                        >
                          {item.char}
                        </span>
                      ))}
                    </div>

                    {/* Refresh Captcha Button */}
                    <button
                      type="button"
                      onClick={() => {
                        handleReset();
                      }}
                      className="flex items-center justify-center w-14 h-14 rounded-md flex-shrink-0 transition hover:opacity-90"
                      style={{ backgroundColor: "#1a3a5c" }}
                      title="Refresh Captcha"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          d="M11.6875 13.8125H5.3125C5.03071 13.8125 4.76046 13.7005 4.5612 13.5013C4.36194 13.302 4.25 13.0317 4.25 12.75V6.37495C4.25 6.09316 4.36194 5.82291 4.5612 5.62365C4.76046 5.4244 5.03071 5.31245 5.3125 5.31245C5.59429 5.31245 5.86454 5.4244 6.0638 5.62365C6.26306 5.82291 6.375 6.09316 6.375 6.37495V10.1853L8.31805 8.2423C10.6877 5.86071 13.906 4.51741 17.2656 4.50761H17.336C20.6671 4.49903 23.8674 5.80311 26.2438 8.13738C26.4378 8.33588 26.5464 8.60243 26.5464 8.88002C26.5465 9.1576 26.4378 9.42417 26.2438 9.62269C26.0498 9.82121 25.7858 9.93593 25.5083 9.94229C25.2308 9.94866 24.9618 9.84617 24.7589 9.65675C22.7781 7.71248 20.1116 6.62611 17.336 6.63261H17.2762C14.4768 6.64123 11.7952 7.7604 9.82016 9.74441L7.87711 11.6875H11.6875C11.9693 11.6875 12.2395 11.7994 12.4388 11.9987C12.6381 12.1979 12.75 12.4682 12.75 12.75C12.75 13.0317 12.6381 13.302 12.4388 13.5013C12.2395 13.7005 11.9693 13.8125 11.6875 13.8125ZM28.6875 20.1875H22.3125C22.0307 20.1875 21.7605 20.2994 21.5612 20.4987C21.3619 20.6979 21.25 20.9682 21.25 21.25C21.25 21.5317 21.3619 21.802 21.5612 22.0013C21.7605 22.2005 22.0307 22.3125 22.3125 22.3125H26.1229L24.1798 24.2555C22.2051 26.2392 19.5241 27.3583 16.7251 27.3673H16.6653C13.8898 27.3738 11.2232 26.2874 9.24242 24.3432C9.14346 24.2419 9.02526 24.1615 8.89477 24.1066C8.76428 24.0516 8.62413 24.0233 8.48256 24.0234C8.34098 24.0234 8.20084 24.0517 8.07035 24.1066C7.93987 24.1615 7.82168 24.242 7.72273 24.3432C7.62378 24.4445 7.54606 24.5645 7.49414 24.6962C7.44222 24.8279 7.41715 24.9687 7.42039 25.1102C7.42364 25.2518 7.45514 25.3912 7.51305 25.5204C7.57095 25.6496 7.65409 25.7659 7.75758 25.8625C10.1339 28.1968 13.3343 29.5009 16.6653 29.4923H16.7344C20.0935 29.4821 23.3113 28.1389 25.6806 25.7576L27.625 23.8146V27.625C27.625 27.9067 27.7369 28.177 27.9362 28.3763C28.1355 28.5755 28.4057 28.6875 28.6875 28.6875C28.9693 28.6875 29.2395 28.5755 29.4388 28.3763C29.6381 28.177 29.75 27.9067 29.75 27.625V21.25C29.75 20.9682 29.6381 20.6979 29.4388 20.4987C29.2395 20.2994 28.9693 20.1875 28.6875 20.1875Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Submit / Reset Buttons */}
                  <div className="flex gap-4 mt-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 rounded-md text-white font-semibold text-base transition hover:opacity-90"
                      style={{ backgroundColor: "#1a3a5c" }}
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      onClick={handleReset}
                      className="flex-1 py-4 rounded-md font-semibold text-base border-2 transition hover:bg-gray-50"
                      style={{
                        borderColor: "#1a3a5c",
                        color: "#1a3a5c",
                        backgroundColor: "white",
                      }}
                      disabled={isSubmitting}
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <div className="flex justify-center p-10">
        <div className="w-full h-[540px] bg-[#f1f1f1] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.306090303248!2d2.294481315674282!3d48.85884497928712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0349a8d395%3A0x74a9d0b607b59b53!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1617809356500!5m2!1sen!2sus"
            width="100%"
            height="100%"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

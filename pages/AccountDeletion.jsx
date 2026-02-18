import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const AccountDeletion = () => {
  const phoneRef = useRef(null);
  const itiRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ DEVICE ID (hidden from UI)
  const getDeviceId = () => {
    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      deviceId = "DEV-" + crypto.randomUUID(); // modern browser safe
      localStorage.setItem("device_id", deviceId);
    }
    return deviceId;
  };

  const deviceId = getDeviceId();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "Account Deletion",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ INIT PHONE INPUT
  useEffect(() => {
    if (!phoneRef.current) return;

    itiRef.current = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
    });

    return () => {
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!itiRef.current || !itiRef.current.isValidNumber()) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!isValidEmail(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    // ✅ FINAL PAYLOAD (deviceId included, NOT visible to user)
    const payload = {
      fullName: form.fullName,
      email: form.email,
      message: form.message,
      subject: form.subject,
      phone: itiRef.current.getNumber(),
      deviceId, // 🔐 hidden, auto-attached
    };

    console.log("Payload:", payload);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-6 my-32 rounded-xl shadow-sm">
        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-2">
          Account Deletion Request
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Please verify your details to delete your account
        </p>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-1">Phone number</label>
              <input
                ref={phoneRef}
                type="tel"
                className="w-full border rounded-md py-2 pl-[60px] pr-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button className="w-full bg-black text-white py-2 rounded-full">
              Send Request
            </button>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-4">
              ✅
            </div>
            <h2 className="text-lg font-semibold">
              Request Submitted Successfully
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              We will process your request within 7–14 business days.
            </p>
          </div>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 bg-white/30 flex items-center justify-center">
          Processing...
        </div>
      )}
    </div>
  );
};

export default AccountDeletion;

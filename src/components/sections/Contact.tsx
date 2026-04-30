import emailjs from "@emailjs/browser";
import { useState, type FC, type ReactElement } from "react";

export const Contact: FC = (): ReactElement => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_ax5vs9w",
        "template_01l1d9b",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "P0YArPS8VWuNtt4RA",
      );

      console.log("SUCCESS:", result.text);

      alert("Message sent successfully ");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED:", error);
      alert("Failed to send message ");
    }
  };

  return (
    <div
      id="contact"
      className="grid place-items-center mt-20 max-lg:mx-10 max-lg:pt-13"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl">Contact</h1>
        <h2 className="text-2xl text-center mt-3">Get in touch.</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-10 max-lg:mt-0"
      >
        {/* NAME */}
        <div className="grid grid-cols-1">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-15 border-2 border-[#780FFF] focus:border-[#780FFF] outline-none rounded-xl text-2xl mt-2 p-5"
            type="text"
            required
          />
        </div>

        <div className="grid grid-cols-1 mt-7 max-lg:mt-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="h-15 border-2 border-[#780FFF] focus:border-[#780FFF] outline-none rounded-xl text-2xl mt-2 p-5"
            required
          />
        </div>

        <div className="grid grid-cols-1 mt-7 max-lg:mt-3">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-40 border-2 border-[#780FFF] focus:border-[#780FFF] outline-none rounded-xl text-2xl mt-2 p-5"
            required
          />
        </div>

        <div className="flex justify-center mt-10 max-lg:mt-3">
          <button
            type="submit"
            className="border-2 border-[#780FFF] px-7 py-3 rounded-sm hover:bg-[#780FFF] active:text-white font-semibold transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

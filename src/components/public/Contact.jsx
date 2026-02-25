import { useState } from "react";
import { sendMessage } from "../../api/messages.api";
import Button from "../common/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendMessage({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setStatus("✅ Message sent!");
    } catch {
      setStatus("❌ Failed to send.");
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container-page grid md:grid-cols-2 gap-6">
        
        {/* LEFT INFO CARD */}
        <div className="card p-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="opacity-75 mt-2">
            Send a message. It will be saved in database and shown in Admin dashboard.
          </p>

          {/* ✅ Contact Info */}
          <div className="mt-4 space-y-2 text-sm">
            <p>
              📞 <span className="opacity-70">Phone:</span>{" "}
              <a
                href="tel:+923093366416"
                className="hover:underline"
              >
                0309-3366416
              </a>
            </p>

            <p>
              📧 <span className="opacity-70">Email:</span>{" "}
              <a
                href="mailto:muhammadyousif0811@gmail.com"
                className="hover:underline"
              >
                muhammadyousif0811@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex gap-3 flex-wrap">
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/muhammad-yousif-232531389"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn" href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <div className="mt-6 opacity-60 text-sm">
            © {new Date().getFullYear()} Yousif Ahmed — All rights reserved.
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <form onSubmit={submit} className="card p-6 space-y-3">
          <div>
            <div className="label">Name</div>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="label">Email</div>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="label">Message</div>
            <textarea
              className="input min-h-[120px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button variant="primary" type="submit">
            Send
          </Button>

          <div className="text-sm opacity-70">{status}</div>
        </form>
      </div>
    </section>
  );
}

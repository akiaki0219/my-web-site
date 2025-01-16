'use client'

import {useState} from 'react';

function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSending(true);
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({email, subject, body})
    });
    setIsSending(false);
  }

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/5">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
              Email
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              type="email" id="email" value={email} onChange={(email) => setEmail(email.target.value)} required />
          </div>
          <div className="md:w-1/5">
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/5">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="subject">
              Subject
            </label>
          </div>
          <div className="md:w-3/5">
            <input
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              type="text" id="subject" value={subject} onChange={(subject) => setSubject(subject.target.value)} required />
          </div>
          <div className="md:w-1/5">
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/5">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="body">
              Body
            </label>
          </div>
          <div className="md:w-3/5">
            <textarea
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              id="body" value={body} onChange={(body) => setBody(body.target.value)} required />
          </div>
          <div className="md:w-1/5">
          </div>
        </div>
        <div className="flex justify-center">
          <button className={`px-3 py-2 mb-4 ${isSending ? "bg-blue-100" : "bg-blue-500"}  text-white rounded shadow-md`} disabled={isSending} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

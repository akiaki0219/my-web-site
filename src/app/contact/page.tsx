'use client';

import React, {useRef, useState} from 'react';

function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    let data = {
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      body: bodyRef.current?.value,
    };

    try {
      const res = await fetch("../api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain", "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setStatusMessage("Done.");
        emailRef.current!.value = "";
        subjectRef.current!.value = "";
        bodyRef.current!.value = "";
      } else {
        const errorData = await res.json();
        setStatusMessage(errorData.message || "Failed");
      }
    } catch (error) {
      setStatusMessage("Failed");
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center py-4">Contact Form</h1>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              type="email" id="email" ref={emailRef} required />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="subject">
              Subject
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              type="text" id="subject" ref={subjectRef} required />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="body">
              Body
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-gray-100 border-2 border-gray-400 w-full py-2 px-4"
              id="body" ref={bodyRef} required />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-3 py-2 mb-4 bg-blue-500 text-white rounded shadow-md" type="submit">Submit</button>
        </div>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS configuration - Replace with your actual IDs
  const emailJsConfig = {
    serviceId: 'service_tdr30ri',     
    templateId: 'template_c0pepzp',   
    publicKey: 'Ba-_xsPuJNHEYGPYu'    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.comment,
          to_name: 'Sabbir Islam',
          current_date: new Date().toLocaleString(),
        },
        emailJsConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        comment: "",
      });

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#2A2C39] py-16 px-4 md:px-8 lg:px-16 pt-32">
      <div className="md:w-[65%] mx-auto">
        <div className="text-gray-400 mb-4">|| Get In Touch</div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white font-medium mb-6">
          If you have any project
          <br /> Contact me
        </h2>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-600 text-white p-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Failed to send message. Please try again or email me directly.
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info Card */}
          <div className="lg:w-1/3">
            <div className="bg-[#252734] rounded-lg p-6 space-y-6">
              <div className="bg-[#2A2C39] p-5 rounded-lg border border-transparent hover:bg-[#252734] hover:border-[#2A2C39] transition-all duration-300 ease-in-out transform hover:translate-y-[-3px] hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Phone:</h3>
                <p className="text-gray-400">+880 1530006500</p>
              </div>

              <div className="bg-[#2A2C39] p-5 rounded-lg border border-transparent hover:bg-[#252734] hover:border-[#2A2C39] transition-all duration-300 ease-in-out transform hover:translate-y-[-3px] hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Email:</h3>
                <p className="text-gray-400">sabbir3921@gmail.com</p>
              </div>

              <div className="bg-[#2A2C39] p-5 rounded-lg border border-transparent hover:bg-[#252734] hover:border-[#2A2C39] transition-all duration-300 ease-in-out transform hover:translate-y-[-3px] hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Website:</h3>
                <p className="text-gray-400">https://sabbir-islam.vercel.app/</p>
              </div>

              <div className="bg-[#2A2C39] p-5 rounded-lg border border-transparent hover:bg-[#252734] hover:border-[#2A2C39] transition-all duration-300 ease-in-out transform hover:translate-y-[-3px] hover:shadow-lg">
                <h3 className="text-white font-medium mb-2">Address:</h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="bg-transparent border border-gray-700 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                />

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="bg-transparent border border-gray-700 rounded px-4 py-3 text-gray-300 w-full focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  {formData.email && formData.email.includes('@') && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3334 4L6.00002 11.3333L2.66669 8"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (Optional)"
                  className="bg-transparent border border-gray-700 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-transparent border border-gray-700 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="6"
                  required
                  className="bg-transparent border border-gray-700 rounded px-4 py-3 text-gray-300 w-full focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
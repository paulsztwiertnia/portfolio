import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
    <div className="mt-24 mb-20">
        <div className="text-center">
            <h2 className="text-lg md:text-xl font-light">Have an idea?</h2>
            <p className="text-2xl md:text-3xl font-light mb-2">Get in touch.</p>
        </div>
        <div className="max-w-[1000px] mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
            </label>
            <input
                type="text"
                id="name"
                required
                className="w-[75%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            </div>

            <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
            </label>
            <input
                type="tel"
                id="phone"
                required
                className="w-[75%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            </div>

            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                required
                className="w-[75%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            </div>

            <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
            </label>
            <textarea
                id="message"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            </div>

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            disabled={status === 'sending'}
            >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
            <p className="mt-4 text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
            <p className="mt-4 text-red-500">Failed to send message. Please try again.</p>
            )}
        </form>
        </div>
    </div>
    </>
  );
};

export default ContactForm;
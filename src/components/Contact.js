import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                <p className="text-xl mb-8">Feel free to reach out for collaborations or just a friendly chat.</p>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300 rounded"/>
                    <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded"/>
                    <textarea placeholder="Message" className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

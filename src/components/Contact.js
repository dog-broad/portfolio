import React from 'react';
import user_info from '../data/user_info';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-space-light text-center">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg">{user_info.contact.description}</p>
            <div className="mt-8 flex justify-center space-x-6">
                <a href={user_info.socials.facebook} aria-label="Facebook" className="text-xl hover:text-accent"><FaFacebook /></a>
                <a href={user_info.socials.instagram} aria-label="Instagram" className="text-xl hover:text-accent"><FaInstagram /></a>
                <a href={user_info.socials.linkedin} aria-label="LinkedIn" className="text-xl hover:text-accent"><FaLinkedin /></a>
                <a href={`mailto:${user_info.main.email}`} aria-label="Email" className="text-xl hover:text-accent"><MdEmail /></a>
            </div>
        </section>
    );
};

export default Contact;

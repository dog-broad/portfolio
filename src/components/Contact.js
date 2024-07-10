import React from 'react';
import user_info from '../data/user_info';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaTwitter, FaMedium } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    const socials = user_info.socials;

    return (
        <section id="contact" className="py-20 bg-space-light text-center">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg">{user_info.contact.description}</p>
            <div className="mt-8 flex justify-center space-x-6">
                {socials.facebook && (
                    <a href={socials.facebook} aria-label="Facebook" className="text-xl hover:text-accent"><FaFacebook /></a>
                )}
                {socials.instagram && (
                    <a href={socials.instagram} aria-label="Instagram" className="text-xl hover:text-accent"><FaInstagram /></a>
                )}
                {socials.twitter && (
                    <a href={socials.twitter} aria-label="Twitter" className="text-xl hover:text-accent"><FaTwitter /></a>
                )}
                {socials.github && (
                    <a href={socials.github} aria-label="GitHub" className="text-xl hover:text-accent"><FaGithub /></a>
                )}
                {socials.discord && (
                    <a href={socials.discord} aria-label="Discord" className="text-xl hover:text-accent"><FaDiscord /></a>
                )}
                {socials.medium && (
                    <a href={socials.medium} aria-label="Medium" className="text-xl hover:text-accent"><FaMedium /></a>
                )}
                {socials.linkedin && (
                    <a href={socials.linkedin} aria-label="LinkedIn" className="text-xl hover:text-accent"><FaLinkedin /></a>
                )}
                {user_info.main.email && (
                    <a href={`mailto:${user_info.main.email}`} aria-label="Email" className="text-xl hover:text-accent"><MdEmail /></a>
                )}
            </div>
        </section>
    );
};

export default Contact;

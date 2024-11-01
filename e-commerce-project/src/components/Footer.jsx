import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather'; // Feather Icons'dan sosyal medya ikonları

const Footer = () => {
    return (
        <footer className="bg-[#FAFAFA] text-black">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700">
                            <Facebook />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">
                            <Instagram />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">
                            <Twitter />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h4 className="font-bold mb-4">Company Info</h4>
                        <ul className="space-y-2">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/carrier">Carrier</a></li>
                            <li><a href="/hiring">We are hiring</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/carrier">Carrier</a></li>
                            <li><a href="/hiring">We are hiring</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Features</h4>
                        <ul className="space-y-2">
                            <li><a href="/business">Business Marketing</a></li>
                            <li><a href="/analytics">User Analytics</a></li>
                            <li><a href="/chat">Live Chat</a></li>
                            <li><a href="/support">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="/ios">IOS & Android</a></li>
                            <li><a href="/demo">Watch a Demo</a></li>
                            <li><a href="/customers">Customers</a></li>
                            <li><a href="/api">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Get In Touch</h4>
                        <form className="flex flex-col space-y-2">
                            <input type="email" placeholder="Your Email" className="p-2 border rounded" />
                            <button type="submit" className="button-3">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Bandage. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
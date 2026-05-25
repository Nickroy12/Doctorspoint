"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            Doctors<span className="text-cyan-400">Point</span>
          </h1>
          <p className="text-sm  mt-3">
            Your trusted healthcare platform for booking appointments and finding the right doctors easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 ">
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-4">Services</h2>
          <ul className="space-y-2 ">
            <li>Online Appointment</li>
            <li>Doctor Consultation</li>
            <li>Health Checkup</li>
            <li>Emergency Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-4">Contact</h2>
          <ul className="space-y-2  text-sm">
            <li>Email: support@doctorspoint.com</li>
            <li>Phone: +880 1XXXXXXXXX</li>
            <li>Location: Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 text-center text-sm py-4">
        © {new Date().getFullYear()} DoctorsPoint. All rights reserved.
      </div>
    </footer>
  );
}
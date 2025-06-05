// app/aboutus/page.jsx

"use client";
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center  mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to <span className="font-semibold text-green-700">LogoIpsum Real Estate</span> — your one-stop platform for discovering, listing, and managing real estate properties with ease. Whether you're looking to rent your next apartment or sell your dream home, we’ve got the tools to help you make it happen.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        Our mission is to simplify the real estate process using modern technologies. We aim to provide a user-friendly platform where property owners and seekers can connect easily and securely.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Post properties for Rent or Sale with detailed information and images</li>
        <li>Search and filter listings based on location, type, and features</li>
        <li>Interactive Google Map integration for better property visualization</li>
        <li>Secure authentication and user account management with Clerk</li>
        <li>Cloud-based data storage powered by Supabase</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-700">
        Have questions or need support? Visit our <a href="/contact-us" className="text-green-700 underline">Contact Us</a> page and we’ll be happy to help.
      </p>
    </div>
  );
}


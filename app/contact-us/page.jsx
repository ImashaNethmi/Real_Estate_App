'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const { error } = await supabase.from('contactus').insert([formData]);

    if (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-xl overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-8 space-y-4 border-r border-gray-200">
          <h2 className="text-3xl font-bold text-black">Contact Us</h2>
          <p className="text-gray-600">
            Get in touch with us to learn more about properties, schedule a viewing, or ask any questions. We are here to help with all your real estate needs.
          </p>
          <br />
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>484.324.2400</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@mediaproper.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>📍</span>
              <span>15 West 3rd St. Media, Pa. 19063</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-50 p-8 space-y-4"
        >
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="firstName">Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First"
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="lastName">&nbsp;</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="xxx-xxx-xxxx"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message ..."
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full "
          >
            {loading ? 'Sending...' : 'Submit'}
          </Button>

          {status === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

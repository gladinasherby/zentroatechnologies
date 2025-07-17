import React from "react";

export function ContactSection() {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-2">
              📧 <strong>Email:</strong> contact@yourcompany.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>📍 Chennai, Tamil Nadu</li>
              <li>📍 Bengaluru, Karnataka</li>
              <li>📍 Hyderabad, Telangana</li>
              <li>📍 Kochi, Kerala</li>
              <li>📍 Pune, Maharashtra</li>
              <li>📍 Dubai, UAE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

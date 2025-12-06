export const metadata = {
  title: "About Us",
  description:
    "Learn about Ayushman Educational Academy - our mission, vision, facilities, and commitment to excellence in education.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Made Smaller */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
          <p className="text-base md:text-lg text-blue-100">
            Shaping young minds through excellence in education, discipline, and
            innovation
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <center>Welcome to Ayushman Educational Academy</center>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our academy is dedicated to shaping young minds through excellence
              in education, discipline, and innovation.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide quality education that empowers students to become
              confident, responsible, and successful individuals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational institution that transforms lives
              through innovative teaching methods.
            </p>
          </div>
        </section>

        {/* Facilities & Amenities Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <center>Facilities & Amenities</center>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-3xl mb-3">🏫</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Classrooms
                </h3>
                <p className="text-gray-600">
                  Well-equipped, spacious classrooms with smart boards and
                  comfortable seating arrangements
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Computer Lab
                </h3>
                <p className="text-gray-600">
                  Modern computer facilities with internet access for digital
                  learning
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-3xl mb-3">🏃</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sports Facilities
                </h3>
                <p className="text-gray-600">
                  Playground and sports equipment for physical education and
                  extracurricular activities
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-3xl mb-3">🚌</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transportation
                </h3>
                <p className="text-gray-600">
                  Safe and reliable school bus service covering major routes in
                  the area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <center>Contact Information</center>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      Ayushman Educational Academy
                      <br />
                      Semli Bari, Madhya Pradesh 455001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919098293521"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      +91 90982 93521
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    📧
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@ayushmanacademy.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      contact@ayushmanacademy.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890123!2d76.0667!3d22.9616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzQxLjgiTiA3NsKwMDQnMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ayushman Educational Academy Location"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Connect With Us
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:scale-105"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium">Facebook</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition shadow-md hover:scale-105"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="font-medium">Twitter</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition shadow-md hover:scale-105"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md hover:scale-105"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

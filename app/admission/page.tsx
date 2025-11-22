"use client";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Header Section */}
      <div className="bg-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Admission 2025</h1>
        <p className="text-lg mt-2">
          Join our school for quality education & bright future.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* 🔹 Admission Process */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>

          <ul className="space-y-3 text-gray-700">
            <li>1️⃣ Fill the online admission form.</li>
            <li>2️⃣ Submit all required documents.</li>
            <li>3️⃣ School will schedule an interaction/interview.</li>
            <li>4️⃣ Selected students will receive confirmation.</li>
            <li>5️⃣ Pay the admission & first month fees.</li>
          </ul>
        </section>

        {/* 🔹 Required Documents */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>

          <ul className="space-y-3 text-gray-700">
            <li>📌 Birth Certificate</li>
            <li>📌 Aadhar Card of Student</li>
            <li>📌 Transfer Certificate (if applicable)</li>
            <li>📌 Marksheet of last class</li>
            <li>📌 Passport size photos – Student & Parents</li>
          </ul>
        </section>

        {/* 🔹 Fees Details */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>

          <p className="text-gray-700 mb-4">
            Admission fee + Monthly tuition fee varies according to class.
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Class</th>
                <th className="border p-2">Admission Fee</th>
                <th className="border p-2">Monthly Fee</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2">Nursery - KG2</td>
                <td className="border p-2">₹ 3,000</td>
                <td className="border p-2">₹ 1,000</td>
              </tr>
              <tr>
                <td className="border p-2">Class 1 - 5</td>
                <td className="border p-2">₹ 4,000</td>
                <td className="border p-2">₹ 1,200</td>
              </tr>
              <tr>
                <td className="border p-2">Class 6 - 8</td>
                <td className="border p-2">₹ 5,000</td>
                <td className="border p-2">₹ 1,400</td>
              </tr>
              <tr>
                <td className="border p-2">Class 9 - 12</td>
                <td className="border p-2">₹ 6,000</td>
                <td className="border p-2">₹ 1,800</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 🔹 Online Admission Form */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Online Admission Form</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Student Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Age"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Class Applying For"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Father's Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Mother's Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Mobile Number"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Address"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 md:col-span-2"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

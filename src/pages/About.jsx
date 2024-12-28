import React from "react";

function App() {
  return (
    <>
      <header className="bg-white p-5 flex justify-center items-center shadow-md">
        <section className="text-center py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-blue-600 mb-5">About CivIQ Learning</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            CivIQ Learning is your trusted platform for TNPSC, SSC, and UPSC exam preparation. We empower students with quality content, expert guidance, and flexible learning options to achieve success in their competitive exams.
          </p>
        </section>
      </header>

      <main>
        <section className="flex items-center justify-between py-12 px-10 bg-gray-50">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-gray-800">
              At Civic Learning, <span className="text-green-600">we empower</span>
            </h2>
            <p className="text-lg text-gray-700 mt-4 mb-6">
              Wherever you are, Civic Learning is there for you. Prepare for TNPSC exams with expert guidance, whether online or at a center near you.
            </p>
            <div className="flex gap-10">
              <div className="text-center">
                <h3 className="text-2xl text-green-600 font-bold">10+</h3>
                <p className="text-gray-500">Years of teaching</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-green-600 font-bold">50K+</h3>
                <p className="text-gray-500">Students mentored</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-green-600 font-bold">500+</h3>
                <p className="text-gray-500">Expert faculty</p>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <img
              src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?ga=GA1.1.1214153623.1731750311&semt=ais_hybrid"
              alt="Civic Learning Team"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4">
          {/* Vision Section */}
          <div className="py-12 bg-gradient-to-r from-gray-100 to-white transform skew-y-3">
            <div className="transform -skew-y-3">
              <h2 className="text-3xl text-blue-600 font-bold mb-5">Our Vision</h2>
              <p className="text-lg text-gray-800">
                To be a trusted leader in competitive exam preparation by delivering innovative and accessible learning solutions that empower students to unlock their full potential and succeed in their chosen fields.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="py-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-5">Our Mission</h2>
            <ul className="list-disc ml-5 text-gray-800 text-lg">
              <li>
                To provide a world-class learning experience with structured courses, interactive practice sessions, and real-time support from subject experts.
              </li>
              <li>
                To make high-quality education affordable and accessible for students across all socio-economic backgrounds.
              </li>
              <li>
                To foster a culture of continuous learning and self-improvement by leveraging modern technology and proven teaching methodologies.
              </li>
            </ul>
          </div>

          {/* Core Values Section */}
          <div className="py-12 bg-gradient-to-r from-gray-100 to-white transform skew-y-3">
            <div className="transform -skew-y-3">
              <h2 className="text-3xl text-blue-600 font-bold mb-5">Our Core Values</h2>
              <ul className="list-disc ml-5 text-gray-800 text-lg">
                <li>
                  <strong className="text-gray-900">Excellence:</strong> We are committed to maintaining the highest standards in education and delivering exceptional value to our students.
                </li>
                <li>
                  <strong className="text-gray-900">Innovation:</strong> We embrace technology and innovation to make learning efficient, engaging, and effective.
                </li>
                
                <li>
                  <strong className="text-gray-900">Integrity:</strong> We believe in honest and transparent practices in every aspect of our platform.
                </li>
                <li>
                  <strong className="text-gray-900">Student Success:</strong> We prioritize the success of our students and tailor our solutions to meet their individual needs.
                </li>
                <li>
                  <strong className="text-gray-900">Collaboration:</strong> We work closely with educators, industry professionals, and students to create the best possible learning experience.
                </li>
              </ul>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="py-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-5">What We Offer</h2>
            <ul className="list-disc ml-5 text-gray-800 text-lg">
              <li>Expert-Led Courses: Comprehensive study material and lectures by top educators in the field.</li>
              <li>Interactive Test Series: Evaluate your performance with real-time test series and detailed analysis.</li>
              <li>Flexible Learning Options: Study anytime, anywhere with our online and offline courses.</li>
              <li>Scholarship Programs: We support talented students by offering scholarships and financial assistance.</li>
              <li>Personalized Mentoring: Get one-on-one guidance from experts to clear doubts and stay motivated.</li>
            </ul>
          </div>
        
          <div className="py-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-5">100-Day Test Series Plan</h2>
            <p className="text-lg text-gray-800">
              Achieve your TNPSC Group 4 goals with our <strong>100-Day Structured Test Series</strong>! This plan ensures consistent progress and comprehensive coverage of the syllabus, enabling you to prepare effectively and systematically.
            </p>

            <h3 className="text-2xl text-blue-600 font-bold mt-8 mb-4">How It Works</h3>
            <ul className="list-disc ml-5 text-gray-800 text-lg">
              <li>
                <strong>Daily Topic-Wise Tests:</strong> Every day, focus on a specific topic and attempt a test designed to strengthen your understanding and accuracy. Receive instant feedback and explanations for every question.
              </li>
              <li>
                <strong>Weekly Cumulative Tests:</strong> On every 7th day, take a <strong>Weekly Test</strong> covering all topics from the previous six days. This helps consolidate your learning and identify areas that need revision.
              </li>
            </ul>

            <h3 className="text-2xl text-blue-600 font-bold mt-8 mb-4">Why Choose Our 100-Day Plan?</h3>
            <ul className="list-disc ml-5 text-gray-800 text-lg">
              <li><strong>Consistent Progress:</strong> Stay on track with daily and weekly milestones.</li>
              <li><strong>Comprehensive Coverage:</strong> Ensure all topics are thoroughly practiced.</li>
              <li><strong>Performance Insights:</strong> Identify strengths and weaknesses with regular feedback.</li>
              <li><strong>Exam Simulation:</strong> Weekly tests mimic real exam patterns for better preparedness.</li>
            </ul>

            <h3 className="text-2xl text-blue-600 font-bold mt-8 mb-4">Your Path to Success</h3>
            <p className="text-lg text-gray-800">
              Start your journey today with our <strong>100-Day Test Series Plan</strong> and build the confidence to excel in the TNPSC Group 4 exams.
            </p>
          </div>
        
          {/* Contact Section */}
          <div className="text-center py-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-5">Contact Us</h2>
            <p className="text-lg text-gray-700">Email: support@civIQlearning.com</p>
            <p className="text-lg text-gray-700">Phone: +91-XXXX-XXXXXX</p>
            <p className="text-lg text-gray-700">Address: [Insert Address Here]</p>
          </div>
        </div>
      </main>

      <footer className="text-center bg-gray-100 py-5">
        <p className="text-sm text-gray-700">&copy; 2024 CivIQ Learning. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;

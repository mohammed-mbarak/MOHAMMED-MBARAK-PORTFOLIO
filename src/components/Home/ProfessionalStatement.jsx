const ProfessionalStatement = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Security Analyst | Full-Stack & Mobile Developer
          </span>
        </h2>

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-blue-100">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a <strong className="text-blue-600">Security Analyst, Full-Stack, and Mobile Developer</strong> passionate 
              about bridging cybersecurity and <strong className="text-blue-600">Software Engineering</strong>. I specialize in 
              <strong className="text-blue-600"> threat monitoring, vulnerability assessments, incident response,</strong> 
              and <strong className="text-blue-600">secure coding practices</strong>, delivering resilient and user-focused 
              solutions across web and mobile platforms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I build responsive web applications and <strong className="text-blue-600">cross-platform mobile apps using React Native</strong>, 
              with a strong focus on performance, usability, and secure API integration. My development stack includes 
              <strong className="text-blue-600"> React, React Native, the MERN stack, FastAPI, and Node.js / Express.js</strong>, 
              enabling me to design scalable systems that perform seamlessly across devices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Proficient in tools such as <span className="font-semibold text-cyan-600">Wireshark, Splunk, Nessus, Burp Suite, and Nmap</span>, 
              with practical knowledge of <span className="font-semibold text-cyan-600">NIST</span> and 
              <span className="font-semibold text-cyan-600"> CIS frameworks</span>, I integrate security directly into the 
              software development lifecycle to mitigate risks early and effectively.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg text-gray-800 font-medium italic">
                “I thrive at the intersection of security, web, and mobile development — 
                engineering applications that are scalable, user-centric, and resilient against modern threats.”
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Certified in <span className="font-semibold text-cyan-600">Google Cybersecurity</span>, 
              <span className="font-semibold text-cyan-600"> Cyber Shujaa Security Analyst Certification</span>, and 
              <span className="font-semibold text-cyan-600">Software Engineering</span>, I continuously upskill to stay 
              ahead of evolving technologies. From building secure web platforms to developing 
              <strong className="text-blue-600"> mobile-first applications</strong>, I deliver solutions that merge 
              <strong className="text-blue-600"> security, usability, and innovation.</strong>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Core Focus Areas:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Threat Monitoring
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Vulnerability Assessment
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Secure Coding
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                React & React Native
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Mobile App Development
              </span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                Cloud & DevOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalStatement;

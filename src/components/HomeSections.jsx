const HomeSections = () => {
    return (
      <div className="max-w-5xl mx-auto my-12 grid gap-10">
        {/* Section 1 */}
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Secure Payments</h3>
          <p>We use end-to-end encryption to keep your payments safe and secure.</p>
        </div>
        {/* Section 2 */}
        <div className="bg-green-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Multiple Banks</h3>
          <p>Connect your cards from any bank across Bangladesh and pay your bills easily.</p>
        </div>
        {/* Section 3 */}
        <div className="bg-yellow-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">Real-time Notifications</h3>
          <p>Stay updated on your bill status and due dates through instant alerts.</p>
        </div>
        {/* Section 4 */}
        <div className="bg-purple-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">24/7 Support</h3>
          <p>Our team is ready to help you any time through live chat and email support.</p>
        </div>
      </div>
    );
  };
  
  export default HomeSections;
  
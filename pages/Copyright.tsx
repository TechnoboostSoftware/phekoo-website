import React from "react";

const Copyright: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-[Poppins] mt-20">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 ">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Copyright Notice
        </h1>

        <section className="mb-8">
          <p>
            All content, materials, software, features, and functionality
            appearing on or available through the <strong>Phekoo</strong>{" "}
            website, platform, applications, services, and associated
            documentation (collectively, the “Content”) are the exclusive
            property of <strong>Phekoo</strong> (“we”, “us”, “our”) or our
            licensors and are protected by copyright, trademark, patent, trade
            secret, and other applicable intellectual property laws, including
            international conventions.
          </p>
        </section>

        <section className="mb-8">
          <p className="mb-3">This includes, but is not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Text, images, graphics, logos, icons, and design elements
              displayed on the site and platform
            </li>
            <li>
              The Phekoo mobile and web applications and all related software
              code
            </li>
            <li>
              Algorithms, processes, workflows, and proprietary technologies for
              capturing, timestamping, location-tagging, encrypting, and
              verifying visual proofs
            </li>
            <li>
              Documentation, user interfaces, APIs, API documentation, and
              related materials associated with Phekoo’s services
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Copyright Ownership</h2>
          <p>
            All right, title, and interest in and to the Content (including all
            worldwide intellectual property rights) remain exclusively with{" "}
            <strong>Phekoo</strong> or its licensors. You may not reproduce,
            distribute, display, perform, publish, modify, create derivative
            works from, transmit, or otherwise use the Content except as
            permitted in writing by Phekoo or as expressly authorized through
            functionality provided on the website or platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">License to Use</h2>
          <p>
            Subject to your compliance with our Terms of Service and applicable
            law, Phekoo grants you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Content for your internal
            business purposes. Any other use—including but not limited to
            copying, scraping, data mining, reverse engineering, or unauthorized
            distribution—is strictly prohibited without prior written consent
            from Phekoo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Trademarks</h2>
          <p>
            <strong>Phekoo™</strong> and related logos, product names, and
            service names are trademarks and/or service marks of Phekoo (or its
            affiliates). You agree not to display or use these marks in any
            manner without our prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Reservation of Rights</h2>
          <p>
            We expressly reserve all rights not expressly granted in this
            Copyright Statement and in the Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Reporting Copyright Infringement
          </h2>
          <p>
            If you believe that any material on this site infringes your
            copyright, please contact Phekoo’s designated agent using the
            contact information provided in our legal notices.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Copyright;

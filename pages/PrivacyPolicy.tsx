import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-[Poppins] mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-2">
          <strong>Effective Date:</strong>
        </p>
        <p className="mb-6">
          <strong>Last Updated:</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            At Phekoo, we value your trust and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, store, and share your data when you use the Phekoo mobile app,
            website, and related services (collectively, the “Services”).
          </p>
          <p className="mt-2">
            By using our Services, you agree to the collection and use of
            information as described in this policy. If you do not agree, please
            do not use the Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p className="mb-3">
            We collect only the information necessary to provide, maintain, and
            improve our Services. We follow the principle of data minimisation
            and do not collect more data than is needed for the stated purposes.
          </p>

          <h3 className="font-semibold mb-2">
            a. Information You Provide Directly
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Account information: display name, email address, and password (or
              third-party login credentials)
            </li>
            <li>Profile details: avatar, username, and optional bio</li>
            <li>
              User-generated content: custom prompts, answers, and game
              responses you create during gameplay
            </li>
            <li>
              Communications: messages you send through in-game chat, feedback,
              or support requests
            </li>
            <li>
              Payment information: processed securely by Apple App Store, Google
              Play, or our payment processor; we do not store your full payment
              card details
            </li>
          </ul>

          <h3 className="font-semibold mb-2">
            b. Information Collected Automatically
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Device information: device model, operating system version, unique
              device identifiers, and language settings
            </li>
            <li>
              Usage data: gameplay statistics, session duration, feature
              interactions, and crash/error logs
            </li>
            <li>
              Network information: IP address, connection type (Wi-Fi/mobile),
              and general geographic region (country/city level only; we do not
              collect precise GPS location)
            </li>
          </ul>

          <h3 className="font-semibold mb-2">
            c. Information from Third Parties
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Social login providers (e.g. Google, Apple, Facebook): basic
              profile information you authorise them to share
            </li>
            <li>
              Analytics and advertising partners: aggregated usage trends and
              attribution data
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide and operate the Services, including multiplayer game
              sessions
            </li>
            <li>Create and manage your account</li>
            <li>
              Display your username, avatar, and game responses to other players
              during gameplay
            </li>
            <li>
              Moderate user-generated content to ensure a safe and enjoyable
              experience
            </li>
            <li>
              Process transactions and manage subscriptions or in-app purchases
            </li>
            <li>
              Send service-related communications (e.g. account verification,
              game invitations, updates)
            </li>
            <li>
              Analyse usage patterns to improve game features and fix bugs
            </li>
            <li>
              Prevent fraud, abuse, and violations of our Terms of Service
            </li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4. Multiplayer and Social Features
          </h2>
          <p className="mb-3">
            Phekoo is a multiplayer party game. During gameplay, certain
            information is shared with other players in your game session:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your display name and avatar</li>
            <li>
              Answers, prompts, and responses you submit during a game round
            </li>
            <li>Your game scores and rankings within a session</li>
          </ul>
          <p className="mt-3">
            <strong>Important:</strong> Other players in your session can see
            the content you submit during gameplay. Please do not share
            sensitive personal information in your game responses. We are not
            responsible for how other players may use or share content visible
            during a game session.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. User-Generated Content (UGC)
          </h2>
          <p className="mb-2">
            When you create custom prompts, answers, or other content within the
            app, you grant Phekoo a non-exclusive, worldwide, royalty-free
            licence to use, display, reproduce, and distribute that content
            within the Services for the purpose of operating and improving
            gameplay.
          </p>
          <p>
            You retain ownership of your original content. However, we reserve
            the right to review, moderate, and remove any content that violates
            our community guidelines, Terms of Service, or applicable law.
            Content that is abusive, hateful, sexually explicit, or otherwise
            harmful will be removed and may result in account suspension.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            6. Data Storage and Retention
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your data is stored on secure servers using industry-standard
              encryption at rest and in transit
            </li>
            <li>
              Account data is retained for as long as your account is active,
              plus a reasonable period for legal compliance
            </li>
            <li>
              Gameplay data (scores, responses) may be retained in anonymised or
              aggregated form for analytics
            </li>
            <li>
              Upon account deletion, personal data is removed within 30 days,
              except where retention is required by law
            </li>
            <li>
              Backup copies may persist in encrypted form for up to 90 days
              after deletion
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            7. Sharing of Information
          </h2>

          <p>
            We do not sell your personal data. We may share information in the
            following circumstances:
          </p>

          <p className="mt-2">
            Service providers: trusted third-party partners who help us operate
            the Services (e.g. cloud hosting, analytics, customer support),
            bound by strict confidentiality agreements.
          </p>

          <p className="mt-2">
            Advertising partners: if the app includes ads, limited data (such as
            device identifiers and ad interaction data) may be shared with
            advertising networks. You can opt out of personalised advertising in
            your device settings.
          </p>

          <p className="mt-2">
            Legal requirements: when required by law, regulation, legal process,
            or government request.
          </p>

          <p className="mt-2">
            Safety and enforcement: to protect the rights, safety, or property
            of Phekoo, our users, or the public.
          </p>

          <p className="mt-2">
            Business transfers: in connection with a merger, acquisition, or
            sale of assets, your data may be transferred to the successor
            entity.
          </p>

          <p className="mt-2">
            With your consent: when you explicitly choose to share information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            8. Third-Party Services and SDKs
          </h2>
          <p className="mb-3">
            Our app may integrate the following categories of third-party
            services, each with their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Analytics: e.g. Firebase Analytics, Mixpanel</li>
            <li>Crash reporting: e.g. Firebase Crashlytics, Sentry</li>
            <li>Advertising: e.g. Google AdMob, Unity Ads (if applicable)</li>
            <li>
              Push notifications: e.g. Firebase Cloud Messaging, OneSignal
            </li>
            <li>
              Authentication: e.g. Google Sign-In, Apple Sign-In, Facebook Login
            </li>
          </ul>
          <p>
            We encourage you to review the privacy policies of these third-party
            services. We are not responsible for their data practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">9. Data Security</h2>
          <p className="mb-2">
            Phekoo implements industry-standard security measures to protect
            your information, including encryption in transit (TLS/SSL),
            encryption at rest, access controls, regular security audits, and
            secure development practices.
          </p>
          <p>
            No method of electronic storage or transmission is 100% secure.
            While we strive to protect your data, we cannot guarantee absolute
            security. In the event of a data breach that affects your personal
            information, we will notify you and relevant authorities as required
            by applicable law (within 72 hours for GDPR-covered users).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            10. Your Rights and Choices
          </h2>
          <p className="mb-2">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              Access: request a copy of the personal data we hold about you
            </li>
            <li>
              Correction: request correction of inaccurate or incomplete data
            </li>
            <li>Deletion: request deletion of your personal data</li>
            <li>
              Portability: receive your data in a structured, machine-readable
              format (CSV/JSON)
            </li>
            <li>Restriction: request that we limit how we process your data</li>
            <li>
              Objection: object to processing based on legitimate interests
            </li>
            <li>
              Withdraw consent: where processing is based on consent, you may
              withdraw at any time
            </li>
            <li>
              Opt out of sale: we do not sell personal data, but if this
              changes, you will have the right to opt out
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at info@phekoo.fun. We
            will respond within 30 days (or sooner if required by applicable
            law).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            11. For Users in the European Economic Area (EEA)
          </h2>
          <p className="mb-2">
            If you are in the EEA, the following additional provisions apply:
          </p>
          <p>
            Lawful basis for processing: we process your data based on: (a) your
            consent, (b) performance of a contract (providing the Services), (c)
            legitimate interests (improving our Services, preventing fraud), or
            (d) legal obligations.
          </p>
          <p className="mt-2">
            International transfers: your data may be transferred to and
            processed in countries outside the EEA. We ensure appropriate
            safeguards are in place, such as Standard Contractual Clauses
            (SCCs).
          </p>
          <p className="mt-2">
            Data Protection Officer: for questions about data protection,
            contact us at info@phekoo.fun.
          </p>
          <p className="mt-2">
            Supervisory authority: you have the right to lodge a complaint with
            your local data protection authority.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            12. For California Residents (CCPA/CPRA)
          </h2>
          <p className="mb-2">
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              Right to know what personal information we collect, use, and
              disclose
            </li>
            <li>Right to delete your personal information</li>
            <li>
              Right to opt out of the sale or sharing of personal information
              (we do not currently sell personal data)
            </li>
            <li>
              Right to non-discrimination for exercising your privacy rights
            </li>
          </ul>
          <p>
            To submit a request, contact us at info@phekoo.fun. We will verify
            your identity before processing the request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">13. Children’s Privacy</h2>
          <p className="mb-2">
            Phekoo is not directed at children under 13 (or the applicable age
            of digital consent in your jurisdiction). We do not knowingly
            collect personal information from children under this age.
          </p>
          <p className="mb-2">
            If we become aware that we have collected data from a child under 13
            without verifiable parental consent, we will delete that information
            promptly. If you believe a child has provided us with personal data,
            please contact us immediately at info@phekoo.fun.
          </p>
          <p>
            Age-gating: We implement age verification at account creation. Users
            who indicate they are under the minimum age will not be permitted to
            create an account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            14. Cookies and Tracking Technologies
          </h2>
          <p className="mb-2">
            Our website and Services may use cookies, local storage, and similar
            technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Remember your preferences and login sessions</li>
            <li>Analyse how our Services are used</li>
            <li>Deliver relevant advertising (if applicable)</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling
            certain cookies may affect the functionality of our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            15. Changes to This Policy
          </h2>
          <p className="mb-2">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting a notice in the app, sending an
            email, or through a push notification. The updated policy will
            indicate the new effective date at the top.
          </p>
          <p>
            Your continued use of the Services after changes are posted
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">16. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please contact us:
          </p>
          <p>
            <strong>Phekoo</strong>
          </p>
          <p>
            Website:{" "}
            <a href="https://phekoo.fun" className="text-blue-600 underline">
              https://phekoo.fun
            </a>
          </p>
          <p>Email: info@phekoo.fun</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

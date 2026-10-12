import React from "react";
import { company } from "../data/site";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import "./TermsComp.css";

// Copy carried over from the original terms page. Placeholders the client has
// not supplied yet (jurisdiction) are kept visible on purpose.
const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      'By using the services offered by The Company, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms are subject to change without notice, and it is your responsibility to review them periodically.',
    ],
  },
  {
    title: "Service Description",
    body: [
      "The Company specializes in the storage and distribution of base oil products, including but not limited to Naphthenic Oils, Petrolatum, Ink Oils & Solvents, Micro Waxes, Polyethylene (PE) Waxes, and Paraffin Waxes.",
    ],
  },
  {
    title: "Ordering and Delivery",
    list: [
      "Orders can be placed via our designated ordering channels.",
      "Delivery times and terms are specified in individual contracts.",
      "The Company is not liable for any delays or damages during the transportation process that are beyond our control.",
    ],
  },
  {
    title: "Quality and Product Specifications",
    body: [
      "The Company ensures the quality and specifications of the products as described. Any deviations will be addressed as per the agreed terms in individual contracts.",
    ],
  },
  {
    title: "Payment Terms",
    list: [
      "Payment terms and methods will be agreed upon in individual contracts.",
      "Late payments may incur additional charges or affect the delivery of future orders.",
    ],
  },
  {
    title: "Cancellation and Returns",
    list: [
      "Cancellation of orders may be subject to fees and conditions outlined in individual contracts.",
      "Returns and refunds are governed by our Returns Policy.",
    ],
  },
  {
    title: "Liability",
    list: [
      "The Company is not liable for any direct or indirect damages arising from the use of our products.",
      "We strongly recommend that customers follow safety guidelines and handle our products with care.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Any confidential information shared between The Company and the client will be treated with the utmost confidentiality and not disclosed to third parties.",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    list: [
      "These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction].",
      "Any disputes will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].",
    ],
  },
  {
    title: "Termination",
    body: [
      "The Company reserves the right to terminate services if clients violate these Terms or contractual agreements.",
    ],
  },
  {
    title: "Contact Information",
    body: [
      "If you have any questions or concerns regarding these Terms or our services, please contact us at:",
    ],
    contact: true,
  },
];

const Terms = () => {
  usePageTitle("Terms & Conditions");

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and conditions of service.">
        These terms and conditions (“Terms”) govern the use of the base oil storage and distribution services provided by{" "}
        {company.name}, hereinafter referred to as “The Company.”
      </PageHero>

      <section className="section terms">
        <div className="container-x terms__grid">
          <div className="terms__body">
            {sections.map((s, i) => (
              <Reveal as="section" key={s.title} id={`terms-${i + 1}`} className="terms__section">
                <h2>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                {s.body?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.contact && (
                  <address>
                    {company.address.join(", ")}
                    <br />
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                    <br />
                    <a href={company.mobile.href}>{company.mobile.label}</a>
                  </address>
                )}
              </Reveal>
            ))}

            <p className="terms__closing">
              By using the services provided by The Company, you agree to abide by these Terms and acknowledge that you have read and understood them. If you do not agree with any part of these Terms, please refrain from using our services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;

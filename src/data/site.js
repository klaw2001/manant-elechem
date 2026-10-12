import ser1 from "../images/ser-1.webp";
import ser1Carousel from "../images/ser-1new.webp";
import ser2 from "../images/ser-2.jpg";
import ser3 from "../images/ser-3.jpg";
import ser4 from "../images/ser-4.jpeg";
import ser5 from "../images/ser-5.webp";
import ser6 from "../images/ser-6.jpeg";
import table1 from "../images/heavy-table.jpg";
import table2 from "../images/wax-table.jpg";
import table3 from "../images/table3.png";
import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import about3 from "../images/about-3.jpg";
import testimonialAvatar from "../images/test copy.jpeg";

export const company = {
  name: "Manant Elechem Corporation",
  shortName: "Manant Elechem",
  email: "manant@manantelchem.com",
  mobile: { label: "+91 9327207085", href: "tel:+919327207085" },
  landlines: [
    { label: "+91-265-2960754", href: "tel:+91-265-2960754" },
    { label: "+91-265-2960825", href: "tel:+91-265-2960825" },
  ],
  address: [
    "204 Peridot, 24 Urmi Society",
    "Near Urmi Char Rasta, Akota",
    "Vadodara - 390 015",
  ],
  // Form endpoint already used by the original contact form.
  formEndpoint: "https://formsubmit.co/manant@manantelchem.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d118129.70528972762!2d73.11745737241426!3d22.294905300987306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d22.2971289!2d73.2008848!4m3!3m2!1d22.2949763!2d73.19986039999999!5e0!3m2!1sen!2sin!4v1697805929187!5m2!1sen!2sin",
  designer: { name: "Hrishikesh Netke", url: "https://hrishikeshnetke.in" },
};

// Hero pillars: the three original slides.
export const heroPillars = [
  {
    title: "Base Oil Storage",
    description: "We specialize in safe and secure base oil storage solutions.",
    cta: "Learn more",
    path: "/about",
  },
  {
    title: "Base Oil Distribution",
    description: "Efficiently delivering base oil to your doorstep.",
    cta: "Explore services",
    path: "/services",
  },
  {
    title: "Small-Scale Manufacturing",
    description: "We excel in small-scale base oil manufacturing with precision.",
    cta: "Discover products",
    path: "/services",
  },
];

export const stats = [
  { value: 35, label: "Years of industry experience" },
  { value: 50, suffix: "+", label: "Happy clients" },
  { value: 25000, suffix: "+", label: "Products per month" },
  { value: 30, suffix: "+", label: "Completed projects" },
  { value: 10, suffix: "+", label: "Active projects" },
];

export const productRange = [
  "Naphthenic Oils",
  "Petrolatum",
  "Ink Oils & Solvents",
  "Micro Waxes",
  "Polyethylene (PE) Waxes",
  "Paraffin Waxes",
];

export const homeFilmstrip = [ser1Carousel, ser2, ser3, ser4, ser5, ser6];

export const serviceLines = [
  {
    title: "Light Naphthenic Oils",
    body:
      "Light naphthenic oils are a type of hydrocarbon-based fluid that falls within the category of naphthenic oils. These oils are characterized by their composition, which includes a significant proportion of naphthenic hydrocarbons. Naphthenic hydrocarbons are saturated cyclic compounds, and they are known for their relatively high solvency and good thermal stability.",
    primary: ser1,
    secondary: table3,
  },
  {
    title: "Heavy Oil Specification",
    body:
      "Naphthenic oils are a type of mineral oil characterized by a high content of naphthenic hydrocarbons. They are often used as lubricants and in various industrial applications. Naphthenic oils are known for their excellent thermal stability and resistance to oxidation, making them suitable for use in the production of greases, metalworking fluids, and other lubrication products.",
    primary: ser1,
    secondary: table1,
  },
  {
    title: "Paraffin Waxes",
    body:
      "Paraffin waxes are a type of mineral wax derived from petroleum. They are known for their low cost and versatility. Paraffin waxes have a wide range of uses, including as candle wax, in the cosmetics and pharmaceutical industries, and as a component in various industrial applications. They can provide moisture resistance, heat insulation, and a smooth finish in different products.",
    primary: ser6,
    secondary: table2,
  },
];

// Storage facts from the original Services page. Tanks in kilolitres.
export const storage = {
  tanks: [
    { label: "Tank 1", kl: 60, status: "In place" },
    { label: "Tank 2", kl: 50, status: "In place" },
    { label: "Tank 3", kl: 30, status: "In place" },
  ],
  proposedTanks: [
    { label: "Proposed 1", kl: 80, status: "Proposed · foundation ready" },
    { label: "Proposed 2", kl: 80, status: "Proposed · foundation ready" },
  ],
  warehouse: { value: "2,000", unit: "sq ft", label: "Storage warehouse" },
  weighing: [
    { label: "300 Kg drum weigh scale", status: "In place" },
    { label: "50 MT weigh bridge", status: "Ordered" },
  ],
};

export const aboutPillars = [
  {
    no: "01",
    title: "Storage & distribution",
    body:
      "We specialize in the storage and distribution of a wide range of base oil products, providing a crucial link between manufacturers and end-users. Our state-of-the-art facilities are strategically located to serve diverse industries with precision and care.",
    image: about1,
  },
  {
    no: "02",
    title: "Safety",
    body:
      "Safety is not just a part of our policy; it's ingrained in our culture. We prioritize the safety of our employees, the communities we operate in, and the environment. Our facilities adhere to the highest industry standards and are equipped with advanced safety measures to ensure the integrity of the products we handle.",
    image: about2,
  },
  {
    no: "03",
    title: "Quality control",
    body:
      "We understand that the quality of base oil products is paramount. That's why we maintain stringent quality control processes throughout the storage and distribution journey. Our experienced team is well-versed in handling base oil, ensuring that the integrity of the products remains intact.",
    image: about3,
  },
];

export const testimonials = [
  {
    company: "Savita Polymers Ltd.",
    review:
      "Savita Polymers Ltd. has been a valuable partner for our raw material needs. Their commitment to quality and timely deliveries has greatly contributed to the success of our projects. We look forward to continuing our collaboration.",
  },
  {
    company: "Savita Oil Technologies",
    review:
      "Savita Oil Technologies has consistently provided us with high-quality oils, meeting our specifications. Their responsive team and dedication to customer satisfaction make them a preferred choice for our lubricant requirements.",
  },
  {
    company: "Raj Petro Specialities Pvt. Ltd.",
    review:
      "Raj Petro Specialities Pvt. Ltd. has been a trusted supplier of specialty oils for our industrial applications. Their products have consistently met our stringent quality standards, and their team's support is highly appreciated.",
  },
  {
    company: "Gandhar Oil Refinery",
    review:
      "Gandhar Oil Refinery has been our go-to source for high-quality petroleum products. Their reliability and commitment to customer satisfaction make them a valuable partner in our supply chain.",
  },
  {
    company: "Huber Group (I) Pvt. Ltd.",
    review:
      "Huber Group (I) Pvt. Ltd. has consistently delivered top-notch printing inks that meet our specifications. Their dedication to quality and innovation aligns with our expectations, making them a preferred supplier.",
  },
  {
    company: "Rajkamal Industries Pvt Ltd",
    review:
      "Rajkamal Industries Pvt Ltd has been a reliable partner in providing us with essential raw materials. Their commitment to quality and prompt deliveries has been crucial to our manufacturing processes.",
  },
  {
    company: "Organic Coatings Limited",
    review:
      "Organic Coatings Limited has been instrumental in ensuring the quality of our coatings. Their products have consistently met our specifications, and their team's responsiveness is commendable.",
  },
  {
    company: "Ipsa Texchem Pvt Ltd",
    review:
      "Ipsa Texchem Pvt Ltd has been a valuable partner in providing us with textile chemicals. Their commitment to quality and customer satisfaction has made them a preferred supplier for our business.",
  },
  {
    company: "Mehta Petro Refineries Ltd",
    review:
      "Mehta Petro Refineries Ltd has been a trusted supplier of petroleum products for our industry. Their consistent quality and timely deliveries have contributed to the smooth operation of our processes.",
  },
  {
    company: "Quebec Petroleum Resources Ltd",
    review:
      "Quebec Petroleum Resources Ltd has consistently provided us with reliable petroleum resources. Their commitment to sustainability and ethical practices aligns with our values, making them a preferred partner.",
  },
  {
    company: "Brahmani Oil Corporation",
    review:
      "Brahmani Oil Corporation has been a reliable source for high-quality oils. Their dedication to customer satisfaction and consistent product quality make them a trusted partner in our industry.",
  },
  {
    company: "Panasonic Energy Ltd",
    review:
      "Panasonic Energy Ltd has been a key player in our supply chain for batteries. Their commitment to innovation and quality aligns with our brand values, and we appreciate their contributions to our success.",
  },
  {
    company: "DIC India Ltd",
    review:
      "DIC India Ltd has been a reliable supplier of printing inks for our business. Their consistent quality and on-time deliveries have contributed to the success of our projects. We value our partnership with DIC India Ltd.",
  },
  {
    company: "Royal Petrochem Ltd",
    review:
      "Royal Petrochem Ltd has been a valuable partner in providing us with high-quality petrochemical products. Their commitment to sustainability and excellence aligns with our business values, and we look forward to continued collaboration.",
  },
  {
    company: "Amit Petrolubes",
    review:
      "Amit Petrolubes has consistently delivered high-quality lubricants that meet our industry's specifications. Their responsive team and commitment to customer satisfaction make them a trusted supplier for our business.",
  },
  {
    company: "Sterlite Lubricants Pvt Ltd.",
    review:
      "Sterlite Lubricants Pvt Ltd. has been a reliable supplier of lubricants for our machinery. Their consistent quality and technical support have been instrumental in the smooth operation of our equipment.",
  },
];

export const testimonialAvatarImage = testimonialAvatar;

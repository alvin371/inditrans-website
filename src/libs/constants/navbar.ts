import { RouteURL } from "./route";

export const navbarItems = [
  {
    label: "About",
    childrens: [
      {
        label: "About Us",
        link: RouteURL.about.root,
      },
      {
        label: "Leadership",
        link: RouteURL.about.leadership,
      },
    ],
  },
  {
    label: "Services",
    childrens: [
      {
        label: "Mobile App Dev",
        link: RouteURL.services.mobiledev,
      },
      {
        label: "Web Development",
        link: RouteURL.services.webdev,
      },
      {
        label: "Blockchain Tech",
        link: RouteURL.services.blockchain,
      },
      {
        label: "Digital Transformation",
        link: RouteURL.services.transformation,
      },
      {
        label: "UI UX Design",
        link: RouteURL.services.uiux,
      },
    ],
  },
  {
    label: "Solutions",
    childrens: [
      {
        label: "ERP",
        link: RouteURL.solutions.erp,
      },
      {
        label: "HRIS",
        link: RouteURL.solutions.hris,
      },
      {
        label: "Property Management",
        link: RouteURL.solutions.propertyManagement,
      },
      {
        label: "Finance Management",
        link: RouteURL.solutions.financeManagement,
      },
      {
        label: "Waste Management",
        link: RouteURL.solutions.wasteManagement,
      },
      {
        label: "NFT Marketplace",
        link: RouteURL.solutions.NFTMarketplace,
      },
      {
        label: "Ecommerce App",
        link: RouteURL.solutions.ecommerceApp,
      },
    ],
  },
  {
    label: "Industries",
    childrens: [
      {
        label: "Oil and Gas",
        link: RouteURL.industries.oilAndGas,
      },
      {
        label: "Mining",
        link: RouteURL.industries.mining,
      },
      {
        label: "Education",
        link: RouteURL.industries.education,
      },
      {
        label: "Property",
        link: RouteURL.industries.property,
      },
      {
        label: "Automotive",
        link: RouteURL.industries.automotive,
      },
      {
        label: "Healthcare",
        link: RouteURL.industries.healthcare,
      },
      {
        label: "Travel And Hospitality",
        link: RouteURL.industries.travelAndHospitality,
      },
      {
        label: "Retail",
        link: RouteURL.industries.retail,
      },
      {
        label: "Others",
        link: RouteURL.industries.others,
      },
    ],
  },
];


export const portfolio = [
  {
    id: 1,
    title: "Gym AI",
    slug: "gym-ai",
    description:"An AI Chatbot that simplifies a user's workout by guiding them through optimized routines.",
    img: "/portfolio-img/product-item.png",
    tags: ["featured","react", "ai", "rails","GPT-3"],
  },
  {
    id: 2,
    title: "JP-DOCS ERP",
    slug: "docs-erp",
    description:"An ERP system for the generation and management of sales documents",
    img: "/portfolio-img/docs-erp/preview.png",
    tags: ["meteorjs", "phantomjs","sass","bootstrap","bitbucket","rsync","featured"],
    slides: [
      {
        title: "Background",
<<<<<<< HEAD
        details: "A company that was in business for over 20 years had accumulated thousands of critical sales documents such as invoices, purchase orders, price quotes, and internal custom records. All documents were created in various spreadsheet software (Excel, OpenOffice, LibreOffice), and had a wide range of formats depending on who created it. This made it difficult for management to analyze details about their sales information and required a lot of tedious work to obtain basic information about performance and trends.",
=======
        details: "A company in business for over 20 years had accumulated many sales documents such as invoices, purchase orders, price quotes, etc. in a wide range of file formats. Different software (Excel, OpenOffice, LibreOffice) was used, making it very difficult for management to analyze sales information clearly.",
>>>>>>> 4e0175c4b11c238ce853a34519f1c2be9e412f8e
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Challenge",
<<<<<<< HEAD
        details: "The company needed a way to standardize these documents based on their specific workflow while retaining flexibility to change when necessary. After exploring several out-of-the-box options, it was decided that no option matched these requirements, so a custom solution was needed.",
=======
        details: "The company needed a way to standardize these sales documents while staying flexible to the generation of the documents based on the dynamic specifications of the products sold. After exploring several out-of-the-box solutions, it was decided that no solution existed that could adapt to their desired workflow and requirements. A custom system was needed.",
>>>>>>> 4e0175c4b11c238ce853a34519f1c2be9e412f8e
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Solution",
<<<<<<< HEAD
        details: "After several discussions, it was decided that a simple ERP system should be built to match the current workflow of how all the documents were generated. This system needed to be flexible and had to be implemented within the local network of the company for security purposes.",
=======
        details: "The company decided it was necessary to build a simple erp system that could match the sales team workflow. The system needed to be able to allow the sales team to create the documents, while also making the documents available to other stakeholders in the company on their internal server.",
>>>>>>> 4e0175c4b11c238ce853a34519f1c2be9e412f8e
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Main Features",
        details: `<ul>\n
<<<<<<< HEAD
        <li><b>User Roles system</b> for certain users to change status of documents</li>\n
        <li><b>Generate document IDs</b> according to the company's existing incremental formula</li>\n
        <li>System wide <b>currency conversion</b> for automatic  profit margin calculation based on supplier.</li>\n
        <li>Generate <b>live preview of documents</b> with Japanese seal on approved documents</li>\n
        <li><b>Automated export</b> of documents to their local server via Rsync</li>\n
=======
        <li>- A <b>user account system</b> that allows certain users to change and approve various states of the documents.</li>\n
        <li - Generate document ID's according to the company's existing pattern.</li>\n
        <li>- Have a system wide <b>currency system</b> for calculating the profit margin markup on products based on the country of origin.</li>\n
        <li>- Generate a <b>live preview</b> and printable A4 pdf of sales documents on the fly that matched the company's brand and style</li>\n
        <li>- <b>Automatic backup system</b> to export documents to the company's internal server for outside users to access without needing to use or learn the ERP system. </li>\n
>>>>>>> 4e0175c4b11c238ce853a34519f1c2be9e412f8e
        </ul>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: ["/portfolio-img/docs-erp/docgen.png"],
        left_imgs: []
      },
      {
        title: "Planning Phase",
        details: `Before doing any coding, it was critical to understand the exact flow of the documents to be managed and generated by the new system. After several discussions with all of the key stakeholders (Management, Sales department, Technical Department), A lvl0 DFD was created to outline the deliverables, along with a detailed description of the schema to determine how the models would be structured. Rough whiteboard sketches were made to visualize quickly how the UI would be laid out.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
          "/portfolio-img/docs-erp/design-dfd.png",
          "/portfolio-img/docs-erp/whiteboard1.png"
        ],
        left_imgs: []
      },
      {
        title: "Development Phase",
        details: `As a full-stack project, the majority of time was spent on the backend, with focus on generating the correct documents with the right information. Once the editor and preview components were built, the app was locally ran on a system in their internal network (Companies request for security) and had exported all documents to their specified locations. A final guided wizard component was created to walk users through the creation of the documents to make document generation fast and painless.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
           "/portfolio-img/docs-erp/docgen-editor.png",
          "/portfolio-img/docs-erp/quote-wizard.png"
        ],
        left_imgs: []
      },
      {
<<<<<<< HEAD
        title: "Final Results",
        details: `The project took a little over a year of development. The end result was an application that satisfied all requirements laid out by the company, and was able to generate all important documents needed for the key stakeholders on their local server.`,
=======
        title: "End Result",
        details: `After over a year of development, the system satisfied all requirements for the company, and was able to generate the documents they needed on their server. Program operates on a local machine.`,
>>>>>>> 4e0175c4b11c238ce853a34519f1c2be9e412f8e
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Source Code",
        details: `Unfortunately because an NDA was signed, I am unable to disclose the source code for this project. Specific details such as names have been redacted to protect the confidentiality of the project.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      }
    ] 
  }
]
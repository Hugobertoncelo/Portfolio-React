import logosenai from "../../images/certificates/logosenai.jpg";
import logoalura from "../../images/certificates/logoalura.png";
import senai1 from "../../images/certificates/certificates/Senai/senai1.pdf";
import alura1 from "../../images/certificates/certificates/Alura/alura1.pdf";

export const certificates = [
  {
    id: 1,
    title: "Programador Web",
    org: "Senai",
    img: logosenai,
    category: "Senai",
    link: senai1,
  },
  {
    id: 2,
    title: "Lógica de Programação em JavaScript",
    org: "Alura",
    img: logoalura,
    category: "Senai",
    link: alura1,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    org: "Alura",
    img: logosenai,
    category: "Alura",
    link: "https://github.com/Hugobertoncelo/Certificados/blob/main/certificado.coursera.pdf",
  },
];

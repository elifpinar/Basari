import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full">
          
          
        </div>

        {/* Harita ve İletişim Bölümü */}
        <div className="mt-10">
          <Typography variant="h6" className="mb-3 text-left">
            İletişim
          </Typography>
          <div>
            <Typography variant="body1" className="!text-gray-700">
              <strong>Telefon Numarası:</strong> <a href="tel:+1234567890" className="underline text-blue-600">+90 (555) 995 6274</a>
            </Typography>
          </div>
          <div className="mb-4">
            <Typography variant="body1" className="!text-gray-700">
              <strong>Adres: Basınevleri, 15. Cd. No:18, 06010 Keçiören/Ankara</strong>
              <div className="w-full mt-4 bg-white shadow-lg rounded-md overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8136458792856!2d32.85278100000001!3d39.967918999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34de0afee3c85%3A0xb792c69dfe459959!2zQmHFn2FyxLEgWWF6xLFjxLEgU2VydmlzaQ!5e0!3m2!1str!2str!4v1739375270411!5m2!1str!2str"
    width="100%"
    height="300"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Business Location"
  ></iframe>
</div>

            </Typography>
          </div>
         
        </div>

        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Elif Pınar Arpacı
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;

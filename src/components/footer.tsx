import { Typography, Button, Input } from '@mui/material';

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
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
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
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Business Location"
  ></iframe>
</div>

            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div>
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

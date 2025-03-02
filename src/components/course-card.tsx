import { Typography, Card, CardContent, CardHeader, Button } from '@mui/material';
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",  // Şeffaf arka plan
        borderRadius: "10px",                        // Köşe yuvarlama
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Hafif gölge
        maxWidth: 345,
        margin: "20px",
        padding: "20px",
      }}
    >
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardContent className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button color="success" size="small">
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
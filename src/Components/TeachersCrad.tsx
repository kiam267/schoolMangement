import { CardActionArea } from "@mui/material";
import {} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function TeachersCrad({
  className,
  teachersImage,
  tittle,
  des,
}: {
  className?: string;
  teachersImage: string;
  tittle: string;
  des: string;
}) {
  return (
    <div className={className}>
      <Card sx={{ maxWidth: 345, height: "500px" }}>
        <CardActionArea>
          <CardMedia
            className="py-2"
            component="img"
            height="350"
            image={teachersImage}
            alt="TeacherImage"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center fw-bold py-2"
            >
              {tittle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {des}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

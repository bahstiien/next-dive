import * as React from "react";
import Image from "next/image";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Diver from "../public/images/Diver.jpeg";
import Booking from "../public/images/booking.jpg";
import cardBank from "../public/images/cardBank.jpeg";

export default function ActionAreaCard() {
  return (
    <div className="flex flex-col justify-around mx-28 mb-24 sm:flex-row">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image src={Booking} alt="My desk" width="350" height="300" />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-round text-blue-900 text-center"
            >
              Planifie
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="font-inter text-gray-900 text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec urna sem. Proin volutpat blandit elementum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image src={cardBank} alt="My desk" width="350" height="300" />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-round text-blue-900 text-center"
            >
              Reserve
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="font-inter text-gray-900 text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec urna sem. Proin volutpat blandit elementum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image src={Diver} alt="My desk" width="350" height="300" />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-round text-blue-900 text-center"
            >
              Profites
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="font-inter text-gray-900 text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nec urna sem. Proin volutpat blandit elementum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

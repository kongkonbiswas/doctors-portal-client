import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = ({ product }) => {
  const { name, email, price, details, image } = product;
  return (
    <Grid sx={{ my: 2 }} style={{ width: "385px" }}>
      <Card sx={{ maxWidth: 380, backgroundColor: "#ffab91" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`data:image/*;base64,${image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: ${price}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Email: {email}
          </Typography>
          <Typography
            style={{ height: "80px", overflow: "hidden" }}
            variant="body2"
            color="text.secondary"
          >
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

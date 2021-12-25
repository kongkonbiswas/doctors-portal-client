import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  const { name, email, details, value, hover } = review;
  return (
    <Grid sx={{ my: 2 }} style={{ width: "385px" }}>
      <Card sx={{ maxWidth: 380, backgroundColor: "#18ffff" }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <small>Seller name:{name}</small>
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Email: {email}
          </Typography>
          <Typography
            style={{ height: "80px", overflow: "hidden" }}
            variant="body2"
            color="text.secondary"
          >
            Review: {details}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Value: {value}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Hover:{hover}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;

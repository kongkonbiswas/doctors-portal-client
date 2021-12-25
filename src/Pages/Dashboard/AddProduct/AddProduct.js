import React, { useState } from "react";
import { IconButton, Input, TextField, Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("price", price);
    formData.append("details", details);
    formData.append("image", image);

    fetch("http://localhost:5000/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Your product added successfully.");
          console.log("Your product added successfully.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h3>Add A Product</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          label="Price:"
          sx={{ width: "50%" }}
          variant="standard"
        />
        <br />
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Details-"
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <IconButton color="primary" aria-label="upload picture">
          Upload <PhotoCamera />
        </IconButton>
        <br />
        <Button variant="contained" type="submit">
          Add Products
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddProduct;

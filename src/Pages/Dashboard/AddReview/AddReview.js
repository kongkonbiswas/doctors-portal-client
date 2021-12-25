import React, { useState } from "react";
import { TextField, Button, Rating, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const AddReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState("");
  const [hover, setHover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("details", details);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Your review added successfully.");
          console.log("Your review added successfully.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h3>This is review page.</h3>
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
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Details-"
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        <br />
        <Button variant="contained" type="submit">
          Add Reviews
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddReview;

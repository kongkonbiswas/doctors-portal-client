import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
  {
    name: "DJI",
    description:
      "SZ DJI Technology Co., Ltd. or Shenzhen DJI Sciences and Technologies Ltd. in full, more popularly known as its trade name DJI, which stands for Da-Jiang Innovations, is a Chinese technology company headquartered in Shenzhen, Guangdong, with manufacturing facilities throughout the world.",
    img: fluoride,
  },
  {
    name: "AirSwift Drowns",
    description:
      "As said earlier, your newborn baby as in your company should have a good name so that it can be able to attract more and more people. So, here presenting a new list of the company name and you must check them out. ",
    img: cavity,
  },
  {
    name: "Edge Drones",
    description:
      "Built-In Barometric and Optical Flow Sensors constantly monitor the environment, making microscopic adjustments to the drone's position, ensuring smooth and precise flight.",
    img: whitening,
  },
];


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
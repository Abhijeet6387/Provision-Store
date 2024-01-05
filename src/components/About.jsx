import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProvisionStoreLogo from "../static/provisonstore-logo.png";

const About = () => {
  return (
    <Container>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb" sx={{ mt: 2 }}>
        <Link
          underline="hover"
          color="inherit"
          href="/products"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ArrowBackIcon sx={{ mr: 0.5 }} fontSize="medium" />
          Back
        </Link>
      </Breadcrumbs>
      <Card
        sx={{
          boxShadow: 3,
          mt: 4,
          borderLeft: 3,
          height: "80vh",
          borderLeftColor: "darkorange",
          overflow: "auto",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            sx={{
              height: "200px",
              width: "auto",
              display: "flex",
              ml: "auto",
              mr: "auto",
            }}
            src={ProvisionStoreLogo}
            alt="Provison Store Logo"
          />
          <Typography variant="div">
            Provision Store is an E-shop website which is a virtual provision
            marketplace where users can buy various types of provision products.
            Create a login, about, and product list page for it. Take any theme
            for the beautification of the website.
          </Typography>
          <Box mb={2} mt={2}>
            <Typography variant="h6" component="div">
              Folder Structure:
            </Typography>
            <Typography component="div">
              <ul>
                <li>
                  provision-store/
                  <ul>
                    <li>
                      public/
                      <ul>
                        <li>index.html</li>
                        <li>favicon.ico</li>
                        <li>... more files</li>
                      </ul>
                    </li>
                    <li>
                      src/
                      <ul>
                        <li>
                          api/
                          <ul>
                            <li>api.js</li>
                          </ul>
                        </li>
                        <li>
                          components/
                          <ul>
                            <li>Login.js</li>
                            <li>ProductList.js</li>
                            <li>About.js</li>
                          </ul>
                        </li>
                        <li>
                          static/
                          <ul>
                            <li>provisionstore-logo.png</li>
                          </ul>
                        </li>
                        <li>
                          utils/
                          <ul>
                            <li>HashPassword.js</li>
                            <li>ValidationUtils.js</li>
                          </ul>
                        </li>
                        <li>App.js</li>
                        <li>index.js</li>
                        <li>... more files</li>
                      </ul>
                    </li>
                    <li>package.json</li>
                    <li>... more files</li>
                  </ul>
                </li>
              </ul>
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="h6" component="div" mb={1}>
              Challenges Faced:
            </Typography>
            <Typography component="div">
              <ul>
                <li>
                  API Integration: Managing and handling API calls, Handling
                  access token generated after logging in, and passing it to
                  getproducts API{" "}
                </li>
                <li>
                  Responsive Design: Ensuring a consistent and responsive design
                  across different devices.
                </li>
                <li>
                  State Management: Properly managing and updating states within
                  components.
                </li>
                <li>
                  Routing and Navigation: Implementing navigation between
                  different pages/components, Created protected routes "/about"
                  & "/products", which can only be accessed if and only if the
                  user is successfully logged in.
                </li>
              </ul>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" mb={1}>
              Starting the Project Step by Step:
            </Typography>
            <Typography component="div">
              <ol>
                <li>Clone the Project Repository</li>
                <li>Navigate to the Project Directory : cd ecomm</li>
                <li>Install Dependencies : npm install</li>
                <li>Run the Development Server : npm start</li>
                <li>View the Application : http://localhost:3000/</li>
              </ol>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;

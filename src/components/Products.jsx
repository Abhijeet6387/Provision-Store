import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Container,
  CircularProgress,
  Box,
  Breadcrumbs,
  Link,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const accessToken = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const productList = await getProducts(accessToken);
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.productCategory.productCategoryName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out..");
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/about"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <InfoIcon sx={{ mr: 0.5 }} fontSize="medium" />
              About
            </Link>
          </Breadcrumbs>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ textTransform: "unset" }}
          >
            Logout
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <TextField
            label="Search Products"
            value={searchTerm}
            size="small"
            fullWidth
            color="warning"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {filteredProducts.length === 0 ? (
              <>
                <Box sx={{ mt: 3, pl: 3 }}>Sorry, No products found!</Box>
              </>
            ) : (
              <>
                {" "}
                {filteredProducts.map((product) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={product.productCategory.productCategoryId}
                  >
                    <Card
                      sx={{
                        boxShadow: 3,
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        borderLeft: 2,

                        borderLeftColor: "darkorange",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 100, padding: 3 }}
                        src={product.productCategory.productCategoryImage}
                        alt={product.productCategory.productCategoryName}
                      />
                      <CardContent>
                        <Typography variant="p">
                          {product.productCategory.productCategoryName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default ProductList;

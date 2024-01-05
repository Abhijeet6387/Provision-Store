import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/api";
import {
  Button,
  FormControl,
  TextField,
  Container,
  Card,
  Box,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { isEmailValid, isPasswordValid } from "../utils/ValidationUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!isEmailValid(email)) {
        throw new Error("Invalid email format");
      }

      if (!isPasswordValid(password)) {
        throw new Error(
          "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, one number, and one special character"
        );
      }

      const accessToken = await loginApi(email, password);
      console.log("TOKENN", accessToken);
      localStorage.setItem("token", accessToken);
      navigate("/products");
    } catch (error) {
      setErrorMessage(error.message);
      setErrorAlert(true);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseErrorAlert = () => {
    setErrorAlert(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          padding: 2,
          minWidth: 300,
          boxShadow: 4,
          borderLeft: 3,
          borderLeftColor: "darkorange",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <h2>Login</h2>
        </Box>
        <FormControl fullWidth>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            color="warning"
            error={!isEmailValid(email)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            required
            color="warning"
            error={!isPasswordValid(password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{
              background: "darkorange",
              mb: 1,
              textTransform: "unset",
              "&:hover": { background: "#000" },
            }}
          >
            Login
          </Button>
        </FormControl>
        <Snackbar
          open={errorAlert}
          autoHideDuration={6000}
          onClose={handleCloseErrorAlert}
          message={errorMessage}
        />
      </Card>
    </Container>
  );
};

export default Login;

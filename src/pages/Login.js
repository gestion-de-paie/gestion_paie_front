import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import CustomLoader from "../components/CustomLoader";
import loginAnimation from "../animations/login.json";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnitLoader from "../components/UnitLoader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Veuillez entrer un email valide.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users = [
        { email: "admin@mail.com", password: "123", role: "admin", id: 1 },
        { email: "client@mail.com", password: "123", role: "client", id: 2 },
      ];

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        localStorage.setItem("userId", foundUser.id);
        localStorage.setItem("userRole", foundUser.role);
        setSuccess(true);
        setTimeout(() => {
          switch (foundUser.role) {
            case "admin":
              navigate("/admin/");
              break;
            case "client":
              navigate("/client");
              break;
            case "chef_projet":
              navigate("/chef");
              break;
            case "membre":
              navigate("/membres");
              break;
            default:
              setError("Rôle inconnu. Contactez l'administrateur.");
          }
        }, 1000);
      } else {
        setSnackbarMessage("Identifiants incorrects.");
        setOpenSnackbar(true);
      }

      setLoading(false);
    }, 1000);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(value && !emailRegex.test(value) ? "Adresse email invalide." : "");
  };

  const SuccessOverlay = () => (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(4px)",
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckCircleIcon sx={{ color: "green", fontSize: 80 }} />
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {loading && <UnitLoader />}

      {success && <SuccessOverlay />}

      <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
        {/* Section animation */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg,rgb(17, 119, 203), #2575fc)",
            position: "relative",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "90%", md: "80%" },
              height: { xs: "100%", sm: "90%", md: "80%" },
              maxWidth: "600px",
              maxHeight: "600px",
            }}
          >
            <Lottie animationData={loginAnimation} loop />
          </Box>
          <Typography
            variant="h3"
            sx={{
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              padding: 2,
              position: "absolute",
              bottom: "20px",
            }}
            aria-live="polite" // Announce the text on screen readers
          >
            Bon retour !
          </Typography>
        </motion.div>

        {/* Section formulaire */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "400px" }, // Make the form responsive
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "2rem",
            }}
            role="form"
            aria-labelledby="login-form" // Label the form for screen readers
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
              id="login-form" // Form title
            >
              Connexion
            </Typography>

            <TextField
              fullWidth
              label="Adresse email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailError)}
              helperText={emailError}
              variant="outlined"
              sx={{ mb: 2 }}
              aria-label="Adresse email" // Accessible label for email input
            />
            <TextField
              fullWidth
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              sx={{ mb: 2 }}
              aria-label="Mot de passe" // Accessible label for password input
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ py: 1.5, borderRadius: "5px", fontSize: "1rem" }}
              onClick={handleSubmit}
              aria-label="Se connecter" // Accessible label for the button
            >
              Se connecter
            </Button>

            {error && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
                role="alert" // Alert for error message
                aria-live="assertive" // Announce error immediately to screen readers
              >
                {error}
              </Typography>
            )}
          </Box>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }} 
            onClose={() => setOpenSnackbar(false)}
            aria-live="assertive" // Announce the snackbar message immediately
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LoginPage;

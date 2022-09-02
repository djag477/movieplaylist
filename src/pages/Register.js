import React from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {createUser, signInWithGoogle} from "../utils/firebase"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  return (
    <>
    <Container maxWidth="xs">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(createUser)}>
        <Box mb={2}>
          <TextField
            id="email"
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            autoComplete="email"
            autoFocus
            {...register("email", { required: "Please submit an email" })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            autoComplete="password"
            {...register("password", { required: "Please provide a password" })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        </Box>
        <Box mb={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmit(createUser)}
          >
            Create Account
          </Button>
        </Box>
      </form>
      <Box mb={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => {
              signInWithGoogle(navigate);
            }}
          >
            Sign Up with Google
          </Button>
        </Box>
    </Container>
    </>
  );
};

export default Register;

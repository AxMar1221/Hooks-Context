import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validations";

const DatosUsuario = () => {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     email: {
  //       value: '',
  //       valid: true
  //     },
  //     password: {
  //       value: '',
  //       valid: true
  //     }
  //   }
  // }
  const [email, setEmail] = useState({ value: "", valid: true });
  const [password, setPassword] = useState({ value: "", valid: true });
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email, password);
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="filled"
        fullWidth
        margin="dense"
        type="email"
        color="error"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) =>{
          const email = input.target.value
          const valid = validateEmail(email)
          setEmail({ value: email, valid: valid})
        }}
      />
      <TextField
        label="Contraseña"
        variant="filled"
        fullWidth
        color="error"
        margin="dense"
        type="password"
        value={password.value}
        onChange={(input) => {
          const password = input.target.value
          const valid = validatePassword(password)
          setPassword({ value: password, valid: valid })
        }}
      />
      <Button variant="outlined" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validations";

const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({ value: "", valid: null });
  const [password, setPassword] = useState({ value: "", valid: null });
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
        if( email.valid && password.valid ){
          console.log(email, password);
          console.log("siguiente formulario");
          updateStep(1);
        } else {
          console.log("datos no validos")
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="filled"
        fullWidth
        margin="dense"
        type="email"
        color="primary"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
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
        margin="dense"
        type="password"
        color="primary"
        error={password.valid  === false}
        helperText={password.valid  === false && "La contraseña debe tener mínimo 8 caracteres y máximo 50  "}
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

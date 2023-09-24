import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateLastName, validateName, validatePhone } from "../helpers/validations";

const DatosPersonales = ({updateStep}) => {
  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });

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
      onSubmit={(e)=>{
        e.preventDefault()
        if( name.valid && lastName.valid && phone.valid){
          console.log(name, lastName, phone);
          console.log("siguiente formulario");
          updateStep(2)
        } else {
          console.log("datos no validos")
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa un nombre de usuario valido"}
        value={name.value}
        onChange={(input) =>{
          const name = input.target.value
          const valid = validateName(name)
          setName({ value: name, valid: valid})
        }}
      />
      <TextField
        label="Apellidos"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Ingresa un apellido de usuario valido"}
        value={lastName.value}
        onChange={(input) =>{
          const lastName = input.target.value
          const valid = validateLastName(lastName)
          setLastName({ value: lastName, valid: valid})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa un numero de telefono valido (de 10 dígitos)"}
        value={phone.value}
        onChange={(input) =>{
          const phone = input.target.value
          const valid = validatePhone(phone)
          setPhone({ value: phone, valid: valid})
        }}
      />
      <Button variant="outlined" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;

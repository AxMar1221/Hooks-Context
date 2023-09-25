import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  estateOfMex,
  validateAddress,
  validateCity,
} from "../helpers/validations";

const DatosEntrega = ({ updateStep }) => {
  const [address, setAddress] = useState({ value: "", valid: null });
  const [city, setCity] = useState({ value: "", valid: null });
  // const [estate, setEstate] = useState({ value: "", valid: null });
  const [estate, setEstate] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setEstate(e.target.value);
  };

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
        if (address.valid && city.valid) {
          console.log(address, city);
          console.log("siguiente formulario");
          updateStep(3);
        } else {
          console.log("datos no validos");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={
          address.valid === false &&
          "Ingresa tu dirección completa (calle, numero, colonia, CP)"
        }
        value={address.value}
        onChange={(input) => {
          const address = input.target.value;
          const valid = validateAddress(address);
          setAddress({ value: address, valid: valid });
        }}
      />
      <TextField
        label="Ciudad"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={
          city.valid === false && "Ingresa en nombre de la ciudad o delegación"
        }
        value={city.value}
        onChange={(input) => {
          const city = input.target.value;
          const valid = validateCity(city);
          setCity({ value: city, valid: valid });
        }}
      />
      {/* <TextField
        label="Estado/Provincia"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
        error={estate.valid === false}
        helperText={estate.valid === false && "Seleciona estado"}
        value={estate.value}
        onChange={(input) =>{
          const estate = input.target.value
          const valid = validateEstate(estate)
          setEstate({ value: estate, valid: valid})
        }}
      /> */}
      <FormControl
        sx={{ width: "100%" }}
        margin="dense"
        variant="filled"
        color="primary"
      >
        <InputLabel>Selecciona un estado</InputLabel>
        <Select
          value={estate}
          onChange={handleChange}
          label="Selecciona un estado"
        >
          {estateOfMex.map((estate) => (
            <MenuItem key={estate.id} value={estate.id}>
              {estate.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;

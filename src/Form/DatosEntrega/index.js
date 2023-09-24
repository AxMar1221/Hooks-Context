import React from "react";
import { TextField, Button, Box } from "@mui/material";

const DatosEntrega = ({updateStep}) => {
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
        updateStep(3)
      }}
    >
      <TextField
        label="Dirección"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Ciudad"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Estado/Provincia"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
      />
      <Button variant="outlined" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;

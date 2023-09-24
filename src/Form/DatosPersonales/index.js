import React from "react";
import { TextField, Button, Box } from "@mui/material";

const DatosPersonales = ({updateStep}) => {
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
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Apellidos"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="Número telefónico"
        variant="filled"
        color="primary"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <Button variant="outlined" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {  IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import  { useState } from "react";

export default function MuiTextField() {
  const [visiblity, setVisiblity] = useState(false);
  const handlePasswordVisibility = () => {
    setVisiblity(!visiblity);
  };
  return(
    <Stack spacing="4" >
    <Stack spacing={4} direction="row">
      <TextField label="name" variant="outlined" />
      <TextField label="name" variant="filled" />
      <TextField label="name" variant="standard" />
    </Stack>
    <Stack spacing={4} direction="row">
      <TextField
        label="small secondary"
        size="small"
        variant="outlined"
        color="success"
      />
    </Stack>
    <Stack spacing={4} direction="row">
      <TextField label="form input" required helperText="strong password" />
      <TextField
        label="form input"
        required
        helperText="strong password"
        type="password"
      />
      <TextField
        label="read only"
        helperText="read only"
        InputProps={{ readOnly: true }}
      />
    </Stack>
    <Stack direction="row" spacing={4}>
      <TextField
        label="amount"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          ),
        }}
      />
      <TextField
        label="weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
      />
      <TextField
        label="password"
        type={visiblity?"text":"password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePasswordVisibility}>
                {visiblity ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
    </Stack>
  )
}

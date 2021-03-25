import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

import { StyledDialog, StyledTextField } from './LoginDialog.styles';

import { useAuth } from '../../providers/Auth';

const LoginDialog = ({ open, onClose }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');

  const handleOnChange = (hook) => ({ target: { value } }) => hook(value);

  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password)
      .then(() => onClose())
      .catch(console.error);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      onSubmit={handleLogin}
    >
      <DialogTitle id="simple-dialog-title">Login dialog</DialogTitle>
      <DialogContent>
        <StyledTextField
          autoFocus
          id="username"
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={handleOnChange(setUsername)}
        />
        <StyledTextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handleOnChange(setPassword)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default LoginDialog;

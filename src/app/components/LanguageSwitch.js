import { useState } from 'react';
import { Switch, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const flags = {
  norway: 'https://flagcdn.com/w640/no.png',
  uk: 'https://flagcdn.com/w640/gb.png',
};

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    padding: 0,
    top: 5,
    margin: 1,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${flags.norway})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        backgroundSize: 'cover',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    borderRadius: '50%',
    width: 34,
    height: 34,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${flags.uk})`,
    backgroundSize: 'cover',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
}));

function LanguageSwitch() {
  const [isNorwegian, setIsNorwegian] = useState(false);

  const handleSwitchChange = () => {
    setIsNorwegian(!isNorwegian);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel control={<StyledSwitch checked={isNorwegian} onChange={handleSwitchChange} />} labelPlacement="start" />
    </ThemeProvider>
  );
}

export default LanguageSwitch;

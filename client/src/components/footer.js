import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles({
  root: {
    width: 'flex',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    
      <BottomNavigationAction label="GitHub" icon={<GitHubIcon onClick={event => window.location.href='https://github.com/AdamSpiegel/Group-Project-3'} />} />
      <BottomNavigationAction label="Support" icon={<ContactSupportIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon onClick={event => window.location.href='https://github.com/AdamSpiegel/Group-Project-3/blob/main/README.md'}/>} />
    </BottomNavigation>
  );
}

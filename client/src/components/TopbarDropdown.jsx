import * as React from 'react';
import { IconButton, ListItemIcon, Tooltip, Menu, MenuItem } from '@mui/material';
import IconRenderer from '../utils/IconRenderer';

export default function TopbarDropdown({ data, iconName, tooltipTitle = '' }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(data);

  return (
    <div>
      <Tooltip title={tooltipTitle}>
        <IconButton
          id='settings'
          aria-controls={open ? 'settings' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IconRenderer iconName={iconName} />
        </IconButton>
      </Tooltip>
      <Menu
        id='settings'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {data.map((option) => (
          <MenuItem onClick={handleClose} key={option.value} value={option.value}>
            {option.icon ? (
              <ListItemIcon>
                <IconRenderer iconName={option.icon} />
              </ListItemIcon>
            ) : (
              ''
            )}
            {option.value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

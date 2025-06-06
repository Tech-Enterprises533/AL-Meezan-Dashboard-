import { useState } from 'react';
import { MenuItem } from 'routes/sitemap';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconifyIcon from 'components/base/IconifyIcon';

const CollapseListItem = ({ subheader, active, items, icon }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ pb: 1.5 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon && (
            <IconifyIcon
              icon={icon}
              sx={{
                color: active ? 'text.primary' : null,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
          sx={{
            '& .MuiListItemText-primary': {
              color: active ? 'text.primary' : null,
            },
          }}
        />
        <IconifyIcon
          icon="iconamoon:arrow-down-2-duotone"
          sx={{
            color: active ? 'text.primary' : 'text.disabled',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items?.map((route) => (
            <ListItemButton
              key={route.pathName}
              component={Link}
              href={route.path}
              sx={{
                ml: 2.25,
                py: 0.65,
                bgcolor: route.active ? 'info.main' : null,
              }}
            >
              <ListItemText
                primary={
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'text.primary',
                      '&::before': {
                        content: '"•"',
                        fontSize: '1rem',
                        color: 'text.primary',
                        mr: 1,
                      },
                    }}
                  >
                    {route.name}
                  </Box>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default CollapseListItem;

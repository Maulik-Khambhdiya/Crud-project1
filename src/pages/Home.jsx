// import React from 'react'
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';



// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     variants: [
//       {
//         props: ({ open }) => open,
//         style: {
//           transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//           }),
//           marginLeft: 0,
//         },
//       },
//     ],
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// const Home = () => {

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const icon = [<GroupAddIcon sx={{ fontSize: "32px" }} />, <DeviceHubIcon sx={{ fontSize: "32px" }} />, <StarsIcon sx={{ fontSize: "32px" }} />, <PaidIcon sx={{ fontSize: "32px" }} />]

//   return (
//     <>


//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="fixed" open={open}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={[
//                 {
//                   mr: 2,
//                 },
//                 open && { display: 'none' },
//               ]}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Student Record Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//             },
//           }}
//           variant="persistent"
//           anchor="left"
//           open={open}
//         >
//           <DrawerHeader sx={{ backgroundColor: "#1976d2" }}>

//             <IconButton onClick={handleDrawerClose}>

//               {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: "white" }} /> : <ChevronRightIcon />}
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List>
//             {['Student Details', 'Class / Stream', 'Academic Performance', 'Fees Detail'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton sx={{
//                   ":hover": {
//                     backgroundColor: "#1976d2",
//                     color: "white",
//                     "& .MuiListItemIcon-root": {
//                       color: "white",
//                     }
//                   }
//                 }}>
//                   <ListItemIcon>
//                     {icon[index]}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>


//         </Drawer>
//         <Main open={open}>
//           <DrawerHeader />
//           <h1>record</h1>
//         </Main>
//       </Box>
//     </>
//   )
// }

// export default Home


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaidIcon from '@mui/icons-material/Paid';
import StarsIcon from '@mui/icons-material/Stars';
import { Link } from '@mui/material';

const drawerWidth = 240;

// pass the data using children
const Home = ({ children }) => {

  const icon = [<DeviceHubIcon sx={{ fontSize: "32px" }} />,<GroupAddIcon sx={{ fontSize: "32px" }} />, <StarsIcon sx={{ fontSize: "32px" }} />, <PaidIcon sx={{ fontSize: "32px" }} />]

  const arrayName = [ { name: "Class / Stream", path: "/streamclass" },{ name: "Student Details", path: "/add-student" }, { name: "Academic Performance", path: "/academyperformance" }, { name: "Fess Details", path: "feesdetails" }]

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "#1976d2" }} />
      <Divider />
      <List>
        {arrayName.map((text, index) => (

          <Link href={text.path} sx={{textDecoration:"none"}}>
            <ListItem  key={text} disablePadding>
              <ListItemButton sx={{
                   ":hover": {
                    backgroundColor: "#1976d2",
                     color: "white",
                    "& .MuiListItemIcon-root": {
                     color: "white",
                    }
                  }
                }}>
                <ListItemIcon>
                  {icon[index]}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

    </div>
  );



  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Student Record Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer

            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            slotProps={{
              root: {
                keepMounted: true, // Better open performance on mobile.
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          {children}
          {/* // get the data using children */}
        </Box>
      </Box>
    </>
  )
}

export default Home

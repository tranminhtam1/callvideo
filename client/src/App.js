/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        {/* <video src="./components/img/bunny.mp4" controls /> */}
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
// import React from 'react';
// import { Typography, AppBar } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// import VideoPlayer from './components/VideoPlayer';
// // import Sidebar from './components/Sidebar';
// import Options from './components/Options';

// import Notifications from './components/Notifications';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 100px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '2px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }));

// const App = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.wrapper}>
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography variant="h2" align="center">Video Chat</Typography>
//       </AppBar>
//       <VideoPlayer />
//       <Options>
//         <Notifications />
//       </Options>
//     </div>
//   );
// };

// export default App;

import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import {CheckStatus} from '../context/CheckStatus'
 
const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    height : 520,
    width: 435,
    backgroundImage : "url(https://pngimg.com/uploads/ironman/ironman_PNG44.png)",
    backgroundSize:'contain',
  },
  reward: {
    color : "#1A6390",
    textAlign:'center',
    marginTop : '85%',
  },
  rewardbutton:{
    marginLeft:'25%',
    marginBottom : 30,
  }
});
 
export default function SimpleModal() {
  const classes = useStyles();
  const user = useContext(CheckStatus)
//   const [open, setOpen] = React.useState(false);
    const open=user.open
    var cl=user.currentLevel
    const callfunc = () => {
      user.handleChange()
      user.afterModal(cl+1)

    };
  
  return (
    <div>
      {/* <button onClick={handleChange}>Ansh</button> */}
      <Modal aria-labelledby="simple-modal-title" open={open} className={classes.modal} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 800}}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="simple-modal-description" className={classes.reward}><b>{10}</b></h2>
            <audio src={require('../assets/songs.mp3')} autoPlay/>
            <Button variant="contained" color="primary" onClick={callfunc} className={classes.rewardbutton}>Collect Your Reward</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
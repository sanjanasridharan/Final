import React,{useContext}from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PostData from './data.json'
import StepButton from '@material-ui/core/StepButton';
import MediaControlCard from "./MediaControlCard"
import {CheckStatus} from '../context/CheckStatus'


function Movi({movie}){ 
  let isNotcomplete
  const user = useContext(CheckStatus)
  const useStyles1 = makeStyles(theme => ({
    paper: {
      opacity:0.2
    },
  }));
  const useStyles2 = makeStyles(theme => ({
    paper: {
      opacity:1
    },
  }));
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  var currentLevel=user.currentLevel
  console.log(currentLevel,"getting from context api")
  if( movie.level===1 || movie.level<=currentLevel)
    {
      isNotcomplete=false
      console.log("inside")
    }
    else
    {
      isNotcomplete=true
      console.log('outside')
    }
  
  return (
    <div  className={isNotcomplete ? classes1.paper : classes2.paper}> 
      <span >
        <Card style={{maxWidth: '200px'}}>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={ movie.poster}/>
          <CardContent>
            <Typography variant="headline" component="h2">{ movie.name }</Typography>
            <Typography component="h2" color="textSecondary">LEVEL:{ movie.level }</Typography>
          </CardContent>
        </Card>
      </span>
    </div>
  )
}


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 95,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    width:170,   
    height: 10,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    marginLeft:3,
    marginRight:3
  },
})(StepConnector);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


export default function StepProgress() {
  const classes = useStyles();
  const user = useContext(CheckStatus)
  // const setLevel=user.setLevel
  let activeStep=user.activeStep
 console.log(activeStep+" i n")
  // const [activeStep, setActiveStep] = React.useState(0);
  const [level,changeLevel] = React.useState(0)
  var cl=user.currentLevel
  // const handleNext = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep+1);
  //   setLevel(cl+1)
  // };
  let getMovie=<MediaControlCard props={level} />
  const getDetails= index => () =>
{
  // cl=index+2
  console.log(cl,"inside get details")
  changeLevel(index)   
}

  return (
    <div className={classes.root}>
        <center>
      
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {PostData.map((movie,index) => (
          // console.log(movie.level)
          <Step key={movie.level}>
             <StepButton onClick={getDetails(index)}>
               
            <Movi movie={movie}  />
            </StepButton>
          </Step>
        ))}
      </Stepper>

      
      </center>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >Next</Button> */}
              {getMovie}
      </div>
  );
}

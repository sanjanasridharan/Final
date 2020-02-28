import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link} from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Typography from '@material-ui/core/Typography';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import '../index.css'
const useStyles = makeStyles(theme => ({
  root: {
     flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: 'flex',
    marginTop:10
  },
  link1: {
    display: 'flex',
    marginTop:10
  },
  icon: {
    marginRight: theme.spacing(0.5),
    // marginBottom:10,
    marginTop:10,
    width: 20,
    height:20
  },
  icon1: {
    marginLeft:10,
    // marginBottom:10,
    marginTop:22,
    width: 20,
    height:20
  },
  title1: {
    marginTop:10,
    marginLeft:1200
    
   },
   title2: {
    marginTop:10,
    
    
   },
   title3: {
    marginTop:10,
    
    
   },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  const classes = useStyles();

  return (
      
  <div className="pinning-header"><div className="pinning-header-container" style={{MarginTop:0, position:'relative',background:'transparent'}}><div className="main-header has-billboard menu-navigation" role="navigation"><a aria-label="Netflix" className="logo icon-logoUpdate active" href="/browse"></a><ul className="tabbed-primary-navigation"><li className="navigation-menu"><a className="menu-trigger" role="button" aria-haspopup="true" tabIndex="0">Browse</a></li><li className="navigation-tab"><Link  className="current active" to="/home">Home</Link></li><li className="navigation-tab"><a href="/browse/genre/83">TV Shows</a></li><li className="navigation-tab"><a href="/browse/genre/34399">Movies</a></li><li className="navigation-tab"><a href="/latest">Latest</a></li><li className="navigation-tab"><a href="/latest">My-List</a></li><li className="navigation-tab"><Link to="/gamify">Gamify</Link></li></ul><div className="secondary-navigation"><div className="nav-element"><div className="searchBox"><button className="searchTab" tabIndex="0" aria-label="Search" data-uia="search-box-launcher"><span className ="icon-search"></span></button></div></div><div className="nav-element show-kids"><a href="/Kids"><h1>Reward 10</h1></a></div><div className="nav-element"><span className="gifts" data-tooltip="gifts-tooltip"><a data-uia="action-click-gift-box" className="gifts-menu" aria-haspopup="true" aria-label="Gifts" href="/referfriends"><svg viewBox="0 0 20 21" role="img" aria-labelledby="gift-box" className="gifts-menu__icon"><defs><polygon id="path-1" points="9.09090909e-05 0 19.3881818 0 19.3881818 20.0960909 9.09090909e-05 20.0960909"></polygon></defs><g id="V1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Cell-4-2" transform="translate(-1083.000000, -24.000000)"><g id="Group-3" transform="translate(1083.000000, 24.000000)"><g id="Clip-2"></g><path d="M18.0246364,10.087 C18.0246364,10.1733636 17.9519091,10.2460909 17.8655455,10.2460909 L17.6782727,10.2460909 L16.3146364,10.2460909 L3.07372727,10.2460909 L1.71009091,10.2460909 L1.52281818,10.2460909 C1.43645455,10.2460909 1.36372727,10.1733636 1.36372727,10.087 L1.36372727,7.56518182 C1.36372727,7.47790909 1.43645455,7.40518182 1.52281818,7.40518182 L9.01190909,7.40518182 L14.601,7.40518182 L17.8655455,7.40518182 C17.9519091,7.40518182 18.0246364,7.47790909 18.0246364,7.56518182 L18.0246364,10.087 Z M16.3146364,18.6624545 C16.3146364,18.6988182 16.281,18.7324545 16.2446364,18.7324545 L10.3755455,18.7324545 L10.3755455,11.6097273 L16.3146364,11.6097273 L16.3146364,18.6624545 Z M9.01190909,18.7324545 L3.14372727,18.7324545 C3.10645455,18.7324545 3.07372727,18.6988182 3.07372727,18.6624545 L3.07372727,11.6097273 L9.01190909,11.6097273 L9.01190909,18.7324545 Z M6.711,1.36336364 C7.94918182,1.36336364 8.95554545,2.37063636 8.95554545,3.60790909 L8.95554545,5.85245455 L6.711,5.85245455 C5.47372727,5.85245455 4.46645455,4.84518182 4.46645455,3.60790909 C4.46645455,2.37063636 5.47372727,1.36336364 6.711,1.36336364 L6.711,1.36336364 Z M10.3755455,4.95790909 C10.3755455,3.86972727 11.261,2.98518182 12.3491818,2.98518182 C13.4382727,2.98518182 14.3228182,3.86972727 14.3228182,4.95790909 C14.3228182,5.36063636 14.1973636,5.73063636 13.9882727,6.04154545 L10.3755455,6.04154545 L10.3755455,4.95790909 Z M17.8655455,6.04154545 L15.4928182,6.04154545 C15.6128182,5.70154545 15.6864545,5.33972727 15.6864545,4.95790909 C15.6864545,3.11790909 14.1891818,1.62063636 12.3491818,1.62063636 C11.491,1.62063636 10.7155455,1.95609091 10.1237273,2.49063636 C9.65009091,1.04972727 8.30827273,-0.000272727273 6.711,-0.000272727273 C4.72190909,-0.000272727273 3.10281818,1.61881818 3.10281818,3.60790909 C3.10281818,4.55245455 3.47736364,5.40245455 4.07554545,6.04154545 L1.52281818,6.04154545 C0.682818182,6.04154545 9.09090909e-05,6.72518182 9.09090909e-05,7.56518182 L9.09090909e-05,10.087 C9.09090909e-05,10.927 0.682818182,11.6097273 1.52281818,11.6097273 L1.71009091,11.6097273 L1.71009091,18.6624545 C1.71009091,19.4533636 2.35281818,20.0960909 3.14372727,20.0960909 L16.2446364,20.0960909 C17.0355455,20.0960909 17.6782727,19.4533636 17.6782727,18.6624545 L17.6782727,11.6097273 L17.8655455,11.6097273 C18.7055455,11.6097273 19.3882727,10.927 19.3882727,10.087 L19.3882727,7.56518182 C19.3882727,6.72518182 18.7055455,6.04154545 17.8655455,6.04154545 L17.8655455,6.04154545 Z" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path></g></g></g></svg></a></span></div><div className="nav-element"><span className="notifications"><button className="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Notifications"><span className="icon-button-notification"></span></button></span></div><div className="nav-element"><div className="account-menu-item"><div className="account-dropdown-button"><a href="/YourAccount" role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-label="Sid – Account &amp; Settings"><span className="profile-link" role="presentation"><img className="profile-icon" src="https://occ-0-1007-1009.1.nflxso.net/art/b228e/d2fd0b05ccca6e4262395e0a39654ced51cb228e.png" alt=""/></span></a><span className="caret" role="presentation"></span></div></div></div></div></div></div></div>
  );
  // <div className={classes.root}>
  //     <AppBar position="static">
  //       <Toolbar>
  //       <HomeIcon className={classes.icon} />
  //       <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
  //      <h4> 
  //       Home
  //       </h4>
       
  //     </Link>
  //     <Link color="inherit" href="/Game" onClick={handleClick} className={classes.link1}>
    
  //      <WhatshotIcon className={classes.icon1} />
  //      <h4> 
  //       Gamify
  //       </h4>
  //     </Link>
  //     <Typography variant="h6" className={classes.title1}>
  //          chetan
  //         </Typography>&nbsp;&nbsp;
  //         <Typography variant="h5" className={classes.title3}>10</Typography>&nbsp;
  //     <EmojiEventsIcon  className={classes.title2}/>
    
        
      
  //       </Toolbar>
  //     </AppBar>
  //   </div>
  // );

}
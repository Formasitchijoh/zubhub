const styles = theme => ({
  root: {

    paddingBottom: '2em',
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0 24px'
    },
  },
  heroSectionStyle: {
    backgroundColor: '#DC3545',
    boxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    WebkitBoxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    MozBoxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    display: 'flex',
    paddingTop: '2.3em',
    paddingBottom: '2.85em',
    justifyContent: 'center',
    width: '100vw',
    marginBottom: '2em'
  },
  imageLeft: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  centerCarousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  carouselContainer: {
    maxWidth: '100%',
  },
  carouselSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  titleStyle: {
    fontFamily: 'Nanum Pen, sans-serif',
    fontSize: '30px',
    fontWeight: 400,
    lineHeight: '40px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  SectionStyle: {
    backgroundColor: '#FFFFFF',
    boxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    WebkitBoxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    MozBoxShadow: '-2px 25px 13px -18px rgba(220,53,69,0.7)',
    display: 'flex',
    paddingTop: '2.3em',
    paddingBottom: '2.85em',
    justifyContent: 'center',
    width: '100%',
  },
  heroContainerStyle: {
    width: '100%',
    maxWidth: '1190px',
    padding: '1.15em 1.15em',
    display: 'flex',
    [theme.breakpoints.down('1000')]: {
      flexDirection: 'column-reverse',
    },
  },
  MessageContainerStyle: {
    flexGrow: 1,
    // color: 'white',
  },
  heroMessageContainerStyle: {
    flexGrow: 1,
    color: 'white',
  },
  heroMessageSecondaryStyle: {
    fontSize: '2.2rem',
  },
  MessageSecondaryStyle: {
    fontSize: '1.5rem',
  },
  heroMessagePrimaryStyle: {
    fontSize: '2.2rem',
    fontWeight: 1000,
  },
  MessagePrimaryStyle: {
    fontSize: '2.5rem',
    fontWeight: 1000,
  },

  heroButtonStyle: {
    textTransform: 'none',
    padding: '0 1em',
    fontSize: '1.2rem',
    fontWeight: 700,
    marginRight: '1em',
    marginTop: '1.2em',
  },
  heroBtnStyle: {
    textTransform: 'none',
    padding: '0 1em',
    fontSize: '1.2rem',
    fontWeight: 700,
    marginRight: '1em',
    marginTop: '1.2em',
  },
  heroImageContainerStyle: {
    display: 'flex',
    [theme.breakpoints.down('1000')]: {
    },
    [theme.breakpoints.down('500')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  heroImageTextSmallStyle: {
    display: 'none',
    [theme.breakpoints.down('500')]: {
      display: 'block',
    },
  },
  heroImageTextStyle: {
    marginLeft: '2em',
    [theme.breakpoints.down('500')]: {
      display: 'none',
    },
  },
  heroImageLinkStyle: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down('500')]: {
      alignSelf: 'center',
    },
  },
  heroImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  desktopheroImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '27.5em',
    width: '40em',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  ambassadorImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  desktopambassadorImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '25em',
    width: '35em',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  teamsImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  desktopteamsImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '18em',
    width: '34em',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },
  reviewImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '20em',
    width: '40em',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // width: '100%',
    },
  },
  globalImageStyle: {
    marginLeft: '2em',
    marginRight: '2em',
    height: '20em',
    width: '20em',
    [theme.breakpoints.down('500')]: {
      marginLeft: '0',
      marginRight: '0',
      // marginTop: '100em',
    },
  },

  mainContainerStyle: {
    // marginTop: '3em',
    maxWidth: '1190px',
    width: '100%',
  },
  projectGridStyle: {
    marginBottom: '2em',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '2em',
    marginLeft: '0.67em',
    marginRight: '0.67em',
  },
  buttonGroupStyle: {
    paddingLeft: '2em',
    paddingRight: '2em',
    display: 'block',
    marginTop: '2em',
    maxWidth: '2000px',
    width: '100%',
  },
  buttonGroupStyleAlternative: {
    padding: '7px 21px',
  },
  floatRight: {
    float: 'right',
  },
  floatLeft: {
    float: 'left',
  },
  welcomeContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('500')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  welcomeStyle: {
    height: '20em',
    [theme.breakpoints.down('500')]: {
      height: '10em',
    },
  },
  welcomeBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& h1': {
      fontWeight: 'bold',
    },
  },
});

export default styles;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    // background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    padding: 30,
    paddingRight: 50,
  },
  grid: {
    width: 1200,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },

  contentWrap: {
    marginTop: 20,
  },
}));

export default function Home() {
  const classes = useStyles();
  const programs = ["first", "second", "third", "fourth", "fifth"];
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>SpaceX Launch Programs</div>
        <Grid container style={{ margin: 20 }}>
          <Grid item xs={12} md={2}>
            <div>Sidemenu comes here</div>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container>
              <Grid
                spacing={4}
                alignItems="center"
                container
                className={classes.grid}
              >
                {programs.map((program) => (
                  <Grid item xs={12} md={4} key={program}>
                    <Paper className={classes.paper}>
                      <div className={classes.box}>
                        <Typography
                          style={{ textTransform: "uppercase" }}
                          color="secondary"
                          gutterBottom
                        >
                          {program} title
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Checking sample content lorem ipsum
                        </Typography>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import FruitsContents from './FruitsContents';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
//Css
import './Fruits.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function HealthyFruits() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
          <div className="top-icon">
            <spam className="remove-icon">
                <RemoveCircleIcon />
            </spam>
              <p className="healthy-fruits">Healthy Fruits</p>
          </div>
        <Grid item xs={12}>
          <GridList cellHeight={160} cols={1}  className={classes.gridList}>
            <img src={img1} />
          </GridList>
          <GridList cellHeight={160} cols={1}  className={classes.gridList}>
            <img src={img2} />
          </GridList>
          <GridList cellHeight={160} cols={1}  className={classes.gridList}>
            <img src={img3} />
          </GridList>
            <FruitsContents/>
        </Grid>
      </Grid>
    </div>
  );
}

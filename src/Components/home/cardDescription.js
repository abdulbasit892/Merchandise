import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import image0 from "../../images/pic.jpg";
import image1 from "../../images/image2.png";
import image2 from "../../images/image3.jpeg";
import image3 from "../../images/image4.jpg";
import image4 from "../../images/image5.jpg";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 345,
    minHeight: 400,
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: "96.25%"
  },
  avatar: {
    backgroundColor: " #dedede",
    width: "fit-content",
    borderRadius: 20
  },
  blackAvatar: {
    margin: 5,

    width: 20,
    height: 20,
    backgroundColor: "#000"
  },
  redAvatar: {
    margin: 5,
    width: 20,
    height: 20,
    backgroundColor: "#c10000"
  },
  blueAvatar: {
    margin: 5,
    width: 20,
    height: 20,
    backgroundColor: "#293462"
  },
  whiteAvatar: {
    margin: 5,
    width: 20,
    height: 20,
    backgroundColor: "#fff"
  },
  cardContnet: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f8f8f8"
  },
  cardText: {
    color: "#00334e",
    fontFamily: "Literata",
    fontWeight: "bolder",
    padding: "5px 5px 5px 25px"
  }
}));
export default function ShirtCard(props) {
  const classes = useStyles();
  if (props.index % 5 === 0) {
    return (
      <Card className={classes.card} onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={image0}
          title="Graphic Tees"
        />
        <CardContent className={classes.cardContnet}>
          <p className={classes.cardText}>Rs: 300</p>
          <Grid container className={classes.avatar}>
            <Avatar className={classes.blackAvatar} />
            <Avatar className={classes.redAvatar} />
            <Avatar className={classes.blueAvatar} />
            <Avatar className={classes.whiteAvatar} />
          </Grid>
        </CardContent>
      </Card>
    );
  } else if (props.index % 5 === 1) {
    return (
      <Card className={classes.card} onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={image1}
          title="Graphic Tees"
        />
        <CardContent className={classes.cardContnet}>
          <p className={classes.cardText}>Rs: 300</p>
          <Grid container className={classes.avatar}>
            <Avatar className={classes.blackAvatar} />
            <Avatar className={classes.redAvatar} />
            <Avatar className={classes.blueAvatar} />
            <Avatar className={classes.whiteAvatar} />
          </Grid>
        </CardContent>
      </Card>
    );
  } else if (props.index % 5 === 2) {
    return (
      <Card className={classes.card} onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={image2}
          title="Graphic Tees"
        />
        <CardContent className={classes.cardContnet}>
          <p className={classes.cardText}>Rs: 300</p>
          <Grid container className={classes.avatar}>
            <Avatar className={classes.blackAvatar} />
            <Avatar className={classes.redAvatar} />
            <Avatar className={classes.blueAvatar} />
            <Avatar className={classes.whiteAvatar} />
          </Grid>
        </CardContent>
      </Card>
    );
  } else if (props.index % 5 === 3) {
    return (
      <Card className={classes.card} onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={image3}
          title="Graphic Tees"
        />
        <CardContent className={classes.cardContnet}>
          <p className={classes.cardText}>Rs: 300</p>
          <Grid container className={classes.avatar}>
            <Avatar className={classes.blackAvatar} />
            <Avatar className={classes.redAvatar} />
            <Avatar className={classes.blueAvatar} />
            <Avatar className={classes.whiteAvatar} />
          </Grid>
        </CardContent>
      </Card>
    );
  } else if (props.index % 5 === 4) {
    return (
      <Card className={classes.card} onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={image4}
          title="Graphic Tees"
        />
        <CardContent className={classes.cardContnet}>
          <p className={classes.cardText}>Rs: 300</p>
          <Grid container className={classes.avatar}>
            <Avatar className={classes.blackAvatar} />
            <Avatar className={classes.redAvatar} />
            <Avatar className={classes.blueAvatar} />
            <Avatar className={classes.whiteAvatar} />
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

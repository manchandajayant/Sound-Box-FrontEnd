import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 1200,
    height: 1100,
    paddingLeft: "1.5%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
};

export class Homepage extends Component {
  componentDidMount() {
    this.props.showAllSpaces();
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    if (!this.props.spaces) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <GridList cellHeight={300} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "180" }}>
              <ListSubheader component="div">
                <Typography
                  variant="h4"
                  style={{
                    color: "black",
                    fontWeight: "2px"
                  }}
                >
                  Spaces
                </Typography>
              </ListSubheader>
            </GridListTile>
            {this.props.spaces.map((space, index) => (
              <GridListTile key={index}>
                <img src={space.url} alt="No Image" />
                <GridListTileBar
                  title={space.name}
                  actionIcon={
                    <IconButton>
                      <Link
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "inherit"
                        }}
                        to={`/spaces/${space.id}`}
                      >
                        Listen
                      </Link>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
  }
}
Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  spaces: state.spaces,
  user: state.users
});

const mapDispatchToProps = {
  showAllSpaces
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));

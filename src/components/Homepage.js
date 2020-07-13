import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllSpaces } from "../actions/spaceActions";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import "../CSS/Homepage.css";
import { Grid, Paper, Typography } from "@material-ui/core";

const iconSpace = new Icon({
  iconUrl: "/pin.png",
  iconSize: [20, 20],
});

const Homepage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces);
  const [activeSpace, setactiveSpace] = useState(null);

  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);
  //console.log("ssp", spaces);

  if (spaces.length < 1) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Typography
          style={{
            fontFamily: "Dosis, sans-serif",
            paddingBottom: "10px",
            letterSpacing: "5px",
          }}
          variant="h3"
        >
          Spaces
        </Typography>
        <Grid item xs={12} md={12} component={Paper} elevation={14}>
          <Map center={[56.992882804633986, 10.04150390625]} zoom={4}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            />
            {spaces.map((coord) => {
              return (
                <Marker
                  key={coord.id}
                  position={[coord.latitude, coord.longitude]}
                  onclick={() => {
                    setactiveSpace(coord);
                  }}
                  icon={iconSpace}
                  style={{
                    fontFamily: "Dosis, sans-serif",
                  }}
                />
              );
            })}
            {activeSpace && (
              <Popup
                position={[activeSpace.latitude, activeSpace.longitude]}
                onClose={() => {
                  setactiveSpace(null);
                }}
              >
                <Link to={`/spaces/${activeSpace.id}`}>
                  <h2>{activeSpace.name}</h2>
                </Link>
              </Popup>
            )}
          </Map>
        </Grid>
      </div>
    );
  }
};

export default Homepage;

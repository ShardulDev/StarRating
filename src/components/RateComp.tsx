import React, { useState } from "react";
import PropTypes from "prop-types";
import { Rating, Box, Typography } from "@mui/material";

function RateComp(props: any) {
  const [value, setValue] = useState<number | null>(0);
  return (
    <Box>
      <Typography>Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ></Rating>
    </Box>
  );
}

RateComp.propTypes = {};

export default RateComp;

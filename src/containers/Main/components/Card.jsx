import React, { memo } from "react";
// import PropTypes from 'prop-types'
import { Card as CardUI } from "../../../components";
import { LabelStyled, ValueStyled, CardContentStyled } from "./style";
import { formatNumber } from "commons/utils/number";

const checkValue = (value) => {
  
  const cases = formatNumber(value);
  if (cases === "") {
    return "0";
  }
  return cases;
};

function Card({ value, label, color }) {
 
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{checkValue(value)}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
}

export default memo(Card);

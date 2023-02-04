import React from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

function FormLabel(props) {
  const { label, classes, common_classes, inputOrder, fieldLabel, required } =
    props;
  return (
    <label htmlFor={label}>
      <Typography
        color="textSecondary"
        className={clsx(
          classes.customLabelStyle,
          // common_classes.marginBottom1em,
        )}
      >
        <Box className={classes.fieldNumberStyle}>{inputOrder}</Box>
        {fieldLabel}
        {required ? <p className={classes.requiredLabelStyle}>*</p> : ''}
      </Typography>
    </label>
  );
}

export default FormLabel;

import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  getActivities,
  activityToggleSave,
  setActivity,
} from '../../store/actions/activityActions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Activity from '../../components/activity/activity';
import styles from '../../assets/js/styles/views/activities/activitiesStyles';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Box } from '@material-ui/core';
const useStyles = makeStyles(styles);

function Activities(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getActivities(props.t);
  }, []);

  let activityList = [];
  const { activities } = useSelector(state => state);
  if (activities) {
    activityList =
      props.auth.tags.filter(item => item === 'staff' || item === 'moderator')
        .length > 0
        ? activities.all_activities
        : activities.published;
  }

  return (
    <div>
      <Grid container className={classes.activityListContainer}>
        {activityList &&
          activityList.map((activity, index) => (
            <Grid
              key={`activityContainer-${index}`}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              align="center"
              className={classes.activityBoxContainer}
            >
              <Activity
                key={`activity-${index}`}
                activity={activity}
                auth={props.auth}
                activityToggleSave={props.activityToggleSave}
                t={props.t}
                history={props.history}
              />
            </Grid>
          ))}
      </Grid>
      {/* // )} */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activities: state.activities,
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => {
      return dispatch(getActivities());
    },
    activityToggleSave: args => {
      return dispatch(activityToggleSave(args));
    },
    setActivity: args => {
      return dispatch(setActivity(args));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

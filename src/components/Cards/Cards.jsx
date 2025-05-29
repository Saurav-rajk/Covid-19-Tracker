import React from 'react'
import {Card, CardContent, Typography, Grid} from '@mui/material';
import cx from 'classnames'
import styles from './Cards.module.css';
import CountUp from 'react-countup'

function Cards({ data = {} }) {
  const { cases, recovered, deaths } = data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5"><CountUp 
              start={0}
              end={cases}
              duration={2.5}
              separator=','
            /></Typography>
            <Typography color="textSecondary">Thu Nov 02 2023</Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
             <Typography variant="h5"><CountUp 
              start={0}
              end={recovered}
              duration={2.5}
              separator=','
            /></Typography>
            <Typography color="textSecondary">Thu Nov 02 2023</Typography>
            <Typography variant="body2">Number of recoveries</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
             <Typography variant="h5"><CountUp 
              start={0}
              end={deaths}
              duration={2.5}
              separator=','
            /></Typography>
            <Typography color="textSecondary">Thu Nov 02 2023</Typography>
            <Typography variant="body2">Number of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cards;
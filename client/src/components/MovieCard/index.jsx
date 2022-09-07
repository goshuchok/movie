import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardMenu } from './components';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = () => {
  const onAddClick = () => alert('movie is added');

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu onAddClick={onAddClick} />

      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/wdzk1wPGOnO8dCnaQozSpe1oH9l.jpg"
        alt="Paella dish"
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          Sonic the Hedgehog 2
        </Typography>

        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          Apr 08, 2022
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default MovieCard;

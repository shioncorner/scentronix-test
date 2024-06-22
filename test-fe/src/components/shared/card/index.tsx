import { CardContent, CardMedia, Card as MuiCard, Typography } from '@mui/material';

type CardProps = {
  name: string;
  image: string;
};

export const Card = ({ name, image }: CardProps) => (
  <MuiCard>
    <CardMedia alt={name} component='img' image={image} sx={{ height: '250px' }} />

    <CardContent>
      <Typography component='div' gutterBottom sx={{ fontWeight: '500' }}>
        {name}
      </Typography>
    </CardContent>
  </MuiCard>
);

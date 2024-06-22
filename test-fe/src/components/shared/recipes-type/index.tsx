import { Container, Grid, Link, Typography } from '@mui/material';

import { Card } from '~components/shared/card';
import type { Page } from '~types/page';

type RecipesTypeProps = {
  href: Page;
  data:
    | {
        id: string;
        name: string;
        description: string;
        prep: string;
        bake: string;
        total: string;
        yield: string;
        image: string;
      }[]
    | null;
  title: string;
};

export const RecipesType = ({ href, data, title }: RecipesTypeProps) => (
  <Container>
    <Link href={href}>
      <Typography
        gutterBottom
        sx={{
          color: 'black',
          fontWeight: 'bold',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
    </Link>

    <Grid container spacing={4}>
      {!data ? (
        <Typography>There are no items available.</Typography>
      ) : (
        data.map((item) => (
          <Grid item key={item.name} md={4} sm={6} xs={12}>
            <Link href={`${href}/${item.id}`}>
              <Card image={item.image} name={item.name} />
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  </Container>
);

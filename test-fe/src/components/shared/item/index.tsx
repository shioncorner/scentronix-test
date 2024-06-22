import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { SaveIcon } from 'lucide-react';

type ItemProps = {
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
      }
    | undefined;
};

/**
 * A component that renders a Category page.
 */
export const Item = ({ data }: ItemProps) => {
  if (!data) {
    return <div className='mt-10 flex justify-center font-bold'>Item not found</div>;
  }

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Typography component='h1' gutterBottom variant='h3'>
            {data.name}
          </Typography>

          <Typography paragraph sx={{ marginTop: '50px' }} variant='body1'>
            {data.description}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper
                elevation={0}
                sx={{ p: 2, display: 'flex', alignItems: 'center', paddingLeft: 0 }}
              >
                <AccessTimeIcon />
                <Box ml={2}>
                  <Typography sx={{ fontWeight: '500' }} variant='subtitle1'>
                    Prep
                  </Typography>
                  <Typography>{data.prep}</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={0}
                sx={{ p: 2, display: 'flex', alignItems: 'center', paddingLeft: 0 }}
              >
                <Box ml={2}>
                  <Typography sx={{ fontWeight: '500' }} variant='subtitle1'>
                    Bake
                  </Typography>
                  <Typography>{data.bake}</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Box ml={2}>
                  <Typography sx={{ fontWeight: '500' }} variant='subtitle1'>
                    Total
                  </Typography>
                  <Typography>{data.total}</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Divider />

          <Box
            mt={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalDiningIcon />
              <Box ml={2}>
                <Typography sx={{ fontWeight: '500' }}>Yield</Typography>
                <Typography>{data.yield}</Typography>
              </Box>
            </Paper>

            <Box display='flex' gap={2} sx={{ justifyContent: 'end' }}>
              <Button
                startIcon={<SaveIcon />}
                sx={{ borderColor: 'red', color: 'black', letterSpacing: 1.5 }}
                variant='outlined'
              >
                Save Recipe
              </Button>
              <Button
                startIcon={<PrintIcon />}
                sx={{ borderColor: 'red', color: 'black', letterSpacing: 1.5 }}
                variant='outlined'
              >
                Print
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box alt='The house from the offer.' component='img' src={data.image} />
        </Grid>
      </Grid>
    </Container>
  );
};

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => (
  <Box
    sx={{
      height: { md: 560 },
      py: { xs: 10, md: 0 },
      overflow: 'hidden',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      background: 'brown',
    }}
  >
    <Container>
      <Box
        sx={{
          mt: { xs: 0, md: 10 },
          position: { md: 'absolute' },
          textAlign: {
            xs: 'center',
            md: 'unset',
          },
        }}
      >
        <div>
          <Typography
            sx={{
              mt: 3,
              color: 'common.white',
              fontWeight: 'bold',
              letterSpacing: 1.5,
            }}
            variant='h4'
          >
            Let&apos;s work together and
            <br /> make awesome things
          </Typography>
        </div>
      </Box>
    </Container>
  </Box>
);

export default Home;

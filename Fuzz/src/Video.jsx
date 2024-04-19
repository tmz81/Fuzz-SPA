import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Video() {
  return (
    <Box
      id="creativeProcess"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Salão Universitário de Arte Contemporânea
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Completando dez anos este ano, a iniciativa traz como tema
            “Fabulações para um mundo em catástrofe”
          </Typography>
        </Box>
        <Grid>
          <Grid item xs={12} sm={6} md={4}>
            <iframe
              width="560"
              height="310"
              border="none"
              src="https://www.youtube.com/embed/A1vKAe9RUsQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

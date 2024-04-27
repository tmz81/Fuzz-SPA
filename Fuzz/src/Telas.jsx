import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import tela1 from "./assets/tela1.webp";
import tela2 from "./assets/tela2.webp";
import tela3 from "./assets/tela3.webp";
import tela4 from "./assets/tela4.webp";
import tela5 from "./assets/tela5.webp";
import tela6 from "./assets/tela6.webp";

const images = [
  {
    src: tela1,
    alt: "tela 1",
  },
  {
    src: tela2,
    alt: "tela 2",
  },
  {
    src: tela3,
    alt: "tela 3",
  },
  {
    src: tela4,
    alt: "tela 4",
  },
  {
    src: tela5,
    alt: "tela 5",
  },
  {
    src: tela6,
    alt: "tela 6",
  },
];

export default function Telas() {
  return (
    <Container
      id="telas"
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
        <Typography component="h2" variant="h4" color="text.primary">
          Telas
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                key={index}
                component="img"
                sx={{
                  height: "100%",
                  display: "block",
                  maxWidth: "100%",
                  width: "auto",
                  mx: "auto",
                }}
                src={img.src}
                alt={img.alt}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "./assets/tattoo1.jpg";
import img2 from "./assets/tattoo2.jpg";
import img3 from "./assets/tattoo3.jpg";
import img4 from "./assets/tattoo4.jpg";
import img5 from "./assets/tattoo5.jpg";
import img6 from "./assets/tattoo6.jpg";

const images = [
  {
    src: img1,
    alt: "Descrição tattoo 1",
  },
  {
    src: img2,
    alt: "Descrição tattoo 2",
  },
  {
    src: img3,
    alt: "Descrição tattoo 3",
  },
  {
    src: img4,
    alt: "Descrição tattoo 4",
  },
  {
    src: img5,
    alt: "Descrição tattoo 5",
  },
  {
    src: img6,
    alt: "Descrição tattoo 6",
  },
];

export default function Tattoos() {
  return (
    <Container
      id="tattoos"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
          Tattoos
        </Typography> 
        <Typography variant="body1" color="text.secondary">
          De padrões geométricos a majestosas traços de arte abstratas, o
          repertório de <strong>Thaik Santos</strong> reflete sua jornada
          artística sem fronteiras. Especializado em diversificação de estilos
          para atender a essência única de cada cliente.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {images.map((img, index) => (
            <Grid item key={img.alt} xs={12} md={4}>
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "10%",
                      display: "block",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      mx: "auto",
                    }}
                    src={img.src}
                    alt={img.alt}
                  />
                </Card>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </Container>
  );
}

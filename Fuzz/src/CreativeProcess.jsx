// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// const images = [
//   {
//     src: processos1,
//     alt: "processos 1",
//   },
//   {
//     src: processos2,
//     alt: "processos 2",
//   },
//   {
//     src: processos3,
//     alt: "processos 3",
//   },
//   {
//     src: processos4,
//     alt: "processos 4",
//   },
//   {
//     src: processos5,
//     alt: "processos 5",
//   },
//   {
//     src: processos6,
//     alt: "processos 6",
//   },
// ];

// export default function CreativeProcess() {
//   return (
//     <Container
//       id="creativeProcess"
//       sx={{
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: { xs: 3, sm: 6 },
//       }}
//     >
//       <Box
//         sx={{
//           width: { sm: "100%", md: "60%" },
//           textAlign: { sm: "left", md: "center" },
//         }}
//       >
//         <Typography component="h2" variant="h4" color="text.primary">
//           Processos Criativos em Telas
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           See what our customers love about our products. Discover how we excel
//           in efficiency, durability, and satisfaction. Join us for quality,
//           innovation, and reliable support.
//         </Typography>
//       </Box>
//       <Grid container spacing={2}>
//         {images.map((img, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
//             <Card
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 flexGrow: 1,
//                 p: 1,
//               }}
//             >
//               <Box
//                 key={index}
//                 component="img"
//                 sx={{
//                   height: "100%",
//                   display: "block",
//                   maxWidth: "100%",
//                   width: "auto",
//                   mx: "auto",
//                 }}
//                 src={img.src}
//                 alt={img.alt}
//               />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} sx={{ mt: 14}}>
//         <iframe
//           width="860"
//           height="610"
//           border="none"
//           src="https://www.youtube.com/embed/BWoY-OFQxU0?si=ch-jY-45eqzOHlPi"
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </Grid>
//     </Container>
//   );
// }

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import processos1 from "./assets/processos1.jpg";
import processos2 from "./assets/processos2.jpg";
import processos3 from "./assets/processos3.jpg";
import processos4 from "./assets/processos4.jpg";
import processos5 from "./assets/processos5.jpg";
import processos6 from "./assets/processos6.jpg";

const images = [
  {
    src: processos1,
    alt: "processos 1",
  },
  {
    src: processos2,
    alt: "processos 2",
  },
  {
    src: processos3,
    alt: "processos 3",
  },
  {
    src: processos4,
    alt: "processos 4",
  },
  {
    src: processos5,
    alt: "processos 5",
  },
  {
    src: processos6,
    alt: "processos 6",
  },
];

export default function CreativeProcess() {
  return (
    <Container
      id="creativeProcess"
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
          Processos Criativos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
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
      <Grid item xs={12} sm={6} md={4} sx={{ mt: 14 }}>
        <iframe
          width="900px"
          height="530px"
          border="none"
          src="https://www.youtube.com/embed/BWoY-OFQxU0?si=ch-jY-45eqzOHlPi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen={true}
        ></iframe>
      </Grid>
    </Container>
  );
}

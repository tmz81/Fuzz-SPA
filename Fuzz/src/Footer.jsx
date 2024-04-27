import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Copyright() {
  return (
    <Typography variant="body1" color="text.primary" mt={1}>
      {"E-mail para contato "}
      <Link href="mailto:thaik.ttt@gmail.com">
        thaik.ttt@gmail.com&nbsp;
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              color="inherit"
              href="https://www.instagram.com/thaik.ttt/"
              aria-label="Instagram"
              sx={{ alignSelf: "center" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://api.whatsapp.com/send?phone=+5581985964758&text=Oi! Gostaria de agendar um horário"
              aria-label="WhatsApp"
              sx={{ alignSelf: "center" }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

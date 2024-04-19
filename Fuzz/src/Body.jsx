function MainContent() {
  return (
    <main>
      <AboutSection />
      <div className="divider-2"></div>
      <TattoosSection />
      <ArtisticProcessSection />
      <PaintingsSection />
      <div className="divider-2"></div>
      <ContactSection />
      <div className="divider-1"></div>
    </main>
  );
}

function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container grid">
        <div className="image">
          <img src="assets/bio.jpeg" alt="3 mulheres sorrindo" />
        </div>
        <div className="text">
          <h2 className="title">Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus deleniti perferendis vel molestiae soluta, quaerat
            beatae dicta ducimus praesentium architecto harum dolorum distinctio
            illo earum assumenda itaque. Omnis, quam repellat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum
            ratione impedit quae eum quis adipisci asperiores, est doloribus
            distinctio excepturi minima eius dolore! Perferendis laborum illo
            aspernatur repellendus ipsum.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            exercitationem, illum sapiente quasi hic iusto odio maiores esse
            quaerat quis necessitatibus at odit, dolores dicta, officia ab quos.
            Provident, quae.
          </p>
        </div>
      </div>
    </section>
  );
}

function TattoosSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <header>
          <h2 className="title">Tattoos</h2>
          <p className="subtitle">
            Com mais de 10 anos no mercado, o artista{" "}
            <strong>ThaikSantos</strong> já conquistou clientes de inúmeros
            países com seus tratamentos exclusivos e totalmente abstratos
          </p>
        </header>
        <div className="testimonials swiper-container">
          <div className="swiper-wrapper">
            {/* Swiper slides */}
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="testimonial swiper-slide" key={index}>
                <blockquote>
                  <img
                    src={`assets/${
                      index % 2 === 0 ? "frame-fuzz.jpg" : "home.jpeg"
                    }`}
                    alt="Tattoo work example"
                  />
                </blockquote>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

function ArtisticProcessSection() {
  return (
    <section className="section" id="artistic-process">
      <div className="container grid">
        <h2 className="title">Creative Process</h2>
        <div className="video">
          <iframe
            width="560"
            height="310"
            src="https://www.youtube.com/embed/A1vKAe9RUsQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function PaintingsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <header>
          <h2 className="title">Paintings</h2>
        </header>
        <div className="testimonials swiper-container">
          {/* Similar swiper structure as TattoosSection */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container grid">
        <div className="text">
          <h2 className="title">Contact</h2>
          <p>
            Entre em contato com ThaikSantos, tire suas dúvidas, realize seu
            orçamento agora.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-whatsapp"></i> Entrar em contato
          </a>
        </div>
        <div className="links">
          <ul className="grid">
            <li>
              <i className="icon-phone"></i>+55 (81) 93445-6754
            </li>
            <li>
              <i className="icon-map-pin"></i> R. Boa Viagem, 346
            </li>
            <li>
              <i className="icon-mail"></i>thaik.ttt@gmail.com
            </li>
          </ul>
        </div>
        <div className="social grid">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-facebook"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainContent;

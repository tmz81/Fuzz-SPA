const ResponsiveIframe = () => {
  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  };

  const containerStyle = {
    position: "relative",
    paddingBottom: "56.25%", // Proporção de 16:9
    height: 0,
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <iframe
        style={iframeStyle}
        src="https://www.youtube.com/embed/BWoY-OFQxU0?si=ch-jY-45eqzOHlPi"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;

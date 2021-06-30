const HavaDurumu = (props) => {
  const { weather } = props;

  if (!weather) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container">
      <div className="alignment">
        <h2>ACCUWEATHER</h2>
        <h3>{weather.name}</h3>
        <h4>{weather.weather.map((data) => data.description).join(",")}</h4>
        <p>{weather.main.temp} °C </p>
        <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default HavaDurumu;

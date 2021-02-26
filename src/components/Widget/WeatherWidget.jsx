/**
 * Отображает содержимое виджета погоды
 */

export default function WeatherWidget(props) {
  return (
    <div className="weather-widget">
      <div className="weather-icon" style={{ backgroundImage: `url(${props.weather}.png)` }} />
      <span className="weather-temperature">{props.temperature}°</span>
      <ol className="weather-forecast">
        {props.forecast.map((item, index, arr) => {
          // Делает первую букву заглавной и добавляет запятые между пунктами
          if (index === 0) item = [item[0].toUpperCase(), ...item.slice(1)];
          return <li key={item}>{item}{index < arr.length - 1 ? ',' : null}</li>;
        })}
      </ol>
    </div>
  )
}

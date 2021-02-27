/**
 * Отображает верхний контейнер с новостями и боковым баннером
 */

import News from "./News/News";
import SideBanner from "./SideBanner";

export default function TopContainer() {
  return (
    <div className="top-container">
      <News />
      <SideBanner header="Работа над ошибками" link="https://yandex.ru" slogan="Смотрите на Яндексе и запоминайте">
        <img className="side-banner-img" src="logo192.png" alt="..." />
      </SideBanner>
    </div>
  )
}

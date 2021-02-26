/**
 * Отображает блок новостей
 */

import HotNews from "./HotNews/HotNews";
import NewsMenu from "../../Menu/Menu";
import Stocks from "./Stocks/Stocks";

const newsMenuItems = [
  {
    name: 'Сейчас в СМИ',
    link: 'https://yandex.ru'
  },
  {
    name: 'В Германии',
    link: 'https://yandex.ru'
  },
  {
    name: 'Рекомендуем',
    link: 'https://yandex.ru'
  }
];

export default function News() {
  return (
    <div className="news-container">
      <NewsMenu menuItems={newsMenuItems} displayDate={true} />
      <HotNews />
      <Stocks />
    </div>
  )
}

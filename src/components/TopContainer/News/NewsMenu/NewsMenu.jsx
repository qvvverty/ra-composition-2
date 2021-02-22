/**
 * Отображает пункты меню и текущую дату
 */

import MenuItem from "./MenuItem";

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

export default function NewsMenu() {
  return (
    <ul className="news-menu">
      {newsMenuItems.map(item => <MenuItem {...item} key={item.name} />)}
      <div className="news-menu-item date">{new Date().toLocaleString('ru')}</div>
    </ul>
  )
}

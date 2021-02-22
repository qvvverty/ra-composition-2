/**
 * Отображает список новостей
 */

import HotNewsItem from "./HotNewsItem";

const hotNews = [
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    link: 'https://yandex.ru',
    text: 'Американскую певицу приговорили к пожизненному нахождению в Братске'
  },
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    link: 'https://yandex.ru',
    text: 'В РЖД нашли еще два новых вида биткоина'
  },
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    link: 'https://yandex.ru',
    text: 'Жителей Архангельска отправят в США за непристойное поведение'
  },
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    link: 'https://yandex.ru',
    text: 'Дефицит бюджета России вырос и уехал в Лондон'
  },
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    link: 'https://yandex.ru',
    text: 'Китайская полиция обнаружила в Тверской области сотни фальшивых школьников после взрыва холодильника'
  }
];

export default function HotNews() {
  return (
    <ul className="hot-news">
      {hotNews.map(newsItem => <HotNewsItem {...newsItem} key={newsItem.text} />)}
    </ul>
  )
}

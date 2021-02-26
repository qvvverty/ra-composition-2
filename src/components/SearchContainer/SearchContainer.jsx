import Menu from "../Menu/Menu";
import SearchInput from "./SearchInput";

const searchMenuItems = [
  {
    name: 'Видео',
    link: 'https://yandex.ru'
  },
  {
    name: 'Картинки',
    link: 'https://yandex.ru'
  },
  {
    name: 'Новости',
    link: 'https://yandex.ru'
  },
  {
    name: 'Карты',
    link: 'https://yandex.ru'
  },
  {
    name: 'Маркет',
    link: 'https://yandex.ru'
  },
  {
    name: 'Переводчик',
    link: 'https://yandex.ru'
  },
  {
    name: 'Эфир',
    link: 'https://yandex.ru'
  },
  {
    name: 'Ещё',
    link: 'https://yandex.ru'
  }
];

export default function SearchContainer() {
  return (
    <div className="search-container">
      <Menu menuItems={searchMenuItems} displayDate={false} />
      <SearchInput />
      <a href="https://yandex.ru"><div className="logo" /></a>
    </div>
  )
}

import './App.css';
import Banner from './components/Banner';
import SearchContainer from './components/SearchContainer/SearchContainer';
import TopContainer from './components/TopContainer/TopContainer';
import BroadcastsWidget from './components/Widget/BroadcastsWidget/BroadcastsWidget';
import MostVisitedWidget from './components/Widget/MostVisitedWidget/MostVisitedWidget';
import WeatherWidget from './components/Widget/WeatherWidget';
import Widget from './components/Widget/Widget';

const broadcasts = [
  {
    name: 'Управление как искусство',
    channel: 'Успех',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru'
  },
  {
    name: 'Ночь. Мир в это время',
    channel: 'EarthTV',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru'
  },
  {
    name: 'Андрей Возн...',
    channel: 'Совершенно секретно',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru'
  }
];

const comingBroadcasts = [
  {
    name: 'THT. Best',
    channel: 'THT International',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru',
    time: '2:00'
  },
  {
    name: 'Джинглики',
    channel: 'Карусель INT',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru',
    time: '3:15'
  },
  {
    name: 'Наедине со всеми',
    channel: 'Первый',
    broadcastLink: 'https://yandex.ru',
    channelLink: 'https://yandex.ru',
    time: '4:30'
  }
];

const mostVisited = [
  {
    name: 'Недвижимость',
    description: 'о сталинках'
  },
  {
    name: 'Маркет',
    description: 'люстры и светильники'
  },
  {
    name: 'Авто.ру',
    description: 'привод 4х4 до 500 000'
  }
];

function App() {
  return (
    <div className="content-wrapper">
      <TopContainer />
      <SearchContainer />
      <Banner bannerImgUrl="/banner.jpg" bannerLink="https://yandex.ru" />
      <div className="widgets-container">
        <Widget header="Погода" headerLink="https://yandex.ru">
          <WeatherWidget weather="rain" temperature="+17" forecast={['утром +17', 'днём +20']} />
        </Widget>
        <Widget header="Карта Германии" headerLink="https://yandex.ru">
          Расписание
        </Widget>
        <Widget header="Эфир" headerLink="https://yandex.ru">
          <BroadcastsWidget broadcasts={broadcasts} />
        </Widget>
        <Widget header="Посещаемое" headerLink="https://yandex.ru">
          <MostVisitedWidget mostVisited={mostVisited} />
        </Widget>
        <Widget
          header="Телепрограмма"
          headerLink="https://yandex.ru"
          addedHeaderElement={<button className="tv-program-live">Эфир</button>}
        >
          <BroadcastsWidget broadcasts={comingBroadcasts} />
        </Widget>
      </div>
    </div>
  );
}

export default App;

/**
 * Отображает блок новостей
 */

import HotNews from "./HotNews/HotNews";
import NewsMenu from "./NewsMenu/NewsMenu";
import Stocks from "./Stocks/Stocks";

export default function News() {
  return (
    <div className="news-container">
      <NewsMenu />
      <HotNews />
      <Stocks />
    </div>
  )
}

export default function SearchInput() {
  return (
    <form className="search-form">
      <input className="search-input" name="search-input" type="text" />
      <button className="search-button">Найти</button>
      <span className="search-slogan">Найдётся всё. Например, <span className="search-sample-phrase">фаза луны сегодня</span></span>
    </form>
  )
}

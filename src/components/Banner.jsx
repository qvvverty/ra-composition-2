/**
 * Отображает баннер, принимает в props url картинки и адрес ссылки
 */

export default function Banner(props) {
  return (
    <a href={props.bannerLink}>
      <div className="banner" style={{ backgroundImage: `url(${props.bannerImgUrl})` }} />
    </a>
  )
}

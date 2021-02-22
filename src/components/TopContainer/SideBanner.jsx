/**
 * Отображает боковой баннер
 */

export default function SideBanner(props) {
  return (
    <div className="side-banner">
      {props.children}
      <p><a href={props.link}>{props.header}</a></p>
      <span>{props.slogan}</span>
    </div>
  )
}

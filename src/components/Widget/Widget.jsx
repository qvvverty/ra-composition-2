/**
 * Отображает разметку виджета. Если есть props.header, добавляет разметку в хэдер
 * (используется в виджете Телепрограмма)
 */

export default function Widget(props) {
  return (
    <div className="widget">
      <div className="widget-header">
        <a className="widget-header-link" href={props.headerLink}>{props.header}</a>
        {props.addedHeaderElement}
      </div>
      {props.children}
    </div>
  )
}

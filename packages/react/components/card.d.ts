import * as React from 'react';

declare namespace F7Card {
  interface Props {
    slot? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    title? : string | number
    content? : string | number
    footer? : string | number
    outline? : boolean
    expandable? : boolean
    expandableAnimateWidth? : boolean
    expandableOpened? : boolean
    noShadow? : boolean
    noBorder? : boolean
    padding? : boolean
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    onCardBeforeOpen? : (...args: any[]) => void
    onCardOpen? : (...args: any[]) => void
    onCardOpened? : (...args: any[]) => void
    onCardClose? : (...args: any[]) => void
    onCardClosed? : (...args: any[]) => void
  }
}
declare class F7Card extends React.Component<F7Card.Props, {}> {
  open() : unknown
  close() : unknown
  onBeforeOpen(e? : any) : unknown
  onOpen(e? : any) : unknown
  onOpened(e? : any) : unknown
  onClose(e? : any) : unknown
  onClosed(e? : any) : unknown
}
export default F7Card;
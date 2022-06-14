import './index.scss'
import { COLORS } from '../../constants/colors'
import { FONTCOLORS } from '../../constants/fontColors'

export default function Keyboard(props: any) {
  const { keys } = props
  function handleClickKey(obj: any) {
    props.handleClick(obj)
  }
  let colors = COLORS.map((el: string) => el)
  colors[0] = 'rgb(226 232 240)'
  return (
    <div className="keyboard_container">
      {keys.map((el: any, index: number) => {
        return (
          <div className="key_box" key={index}>
            {el.map((el2: any, index2: number) => {
              return (
                <div
                  className="key"
                  key={index2}
                  onClick={() => handleClickKey(el2)}
                  style={{
                    backgroundColor: colors[el2.status],
                    color: el2.status === 0 ? FONTCOLORS[0] : FONTCOLORS[1],
                    padding:
                      el2.label !== 'Enter' && el2.label2 !== 'Delete'
                        ? '0.9em 0.5em'
                        : '0.9em',
                  }}
                >
                  {el2.label}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

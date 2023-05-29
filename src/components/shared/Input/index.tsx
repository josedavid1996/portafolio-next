import { classNames, isEmpty } from '@utils/index'
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  SVGProps,
  useId,
  useState
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const Input = ({ label, icon: Icon, rightElement, ...props }: Props) => {
  const uid = useId()
  const [show, setShow] = useState(false)
  const [innerValue, setInnerValue] = useState('')

  const error = props?.error ?? null
  const value = props?.value ?? innerValue

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value)
  }

  const isValueEmpty = isEmpty((value as string) ?? '')
  return (
    <div className={props.className}>
      <div className="relative bg-opacity-50   rounded shadow w-full h-full">
        <input
          {...props}
          id={`input-${uid}`}
          value={value}
          autoComplete="off"
          onBlur={props?.onBlur}
          onChange={props?.onChange ?? handleChange}
          type={
            props.type === 'password'
              ? show
                ? 'text'
                : 'password'
              : props.type
          }
          className={classNames([
            error
              ? 'border-red-400 focus:border-red-600'
              : ' focus:border-primary',
            'peer bg-transparent outline-none w-full h-full px-3 border-2 transition-colors py-3 border-primary rounded-md text-white '
          ])}
        />
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty && props.type !== 'date'
              ? 'top-[10px] left-3 bg-transparent text-primary'
              : 'top-[-12px] left-2 text-primary bg-[#111111] px-2',
            error
              ? 'text-red-600'
              : 'peer-focus:text-primary peer-focus:top-[-12px] peer-focus:bg-[#111111] peer-focus:px-2',
            'absolute peer-focus:top-[-12px] peer-focus:left-2 transition-all '
          ])}
        >
          {label}
        </label>

        {/* eslint-disable */}
        {props.type === 'password' ? (
          <button
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[13px]"
          >
            {show ? 'cerrado' : 'abierto'}
          </button>
        ) : null}

        {typeof Icon === 'function' ? (
          <button
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[13px]"
          >
            {<Icon />}
          </button>
        ) : null}

        {rightElement ? (
          <div className="absolute right-3 top-[13px]">{rightElement}</div>
        ) : null}
        {/* eslint-enable */}
      </div>

      <p className="text-sm text-red-500">{error}</p>
    </div>
  )
}

export default Input

import React, {
  ChangeEvent,
  ReactElement,
  SVGProps,
  TextareaHTMLAttributes,
  useId,
  useState
} from 'react'

import { isEmpty, classNames } from '../../../utils'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  rightElement?: ReactElement
  cols?: number
  rows?: number
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const TextTarea = ({
  label,
  icon: Icon,
  rightElement,
  rows,
  cols,
  ...props
}: Props) => {
  const uid = useId()
  const [innerValue, setInnerValue] = useState('')

  const error = props?.error ?? null
  const value = props?.value ?? innerValue

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInnerValue(e.target.value)
  }

  const isValueEmpty = isEmpty((value as string) ?? '')
  return (
    <div className={props.className}>
      <div className="relative bg-opacity-50   rounded shadow w-full h-full">
        <textarea
          {...props}
          rows={rows}
          cols={cols}
          id={`input-${uid}`}
          value={value}
          autoComplete="off"
          onBlur={props?.onBlur}
          onChange={props?.onChange ?? handleChange}
          className={classNames([
            error
              ? 'border-red-400 focus:border-red-600'
              : 'border-transparent focus:border-primary-500',
            'peer bg-transparent outline-none w-full h-full  px-3 border-2 transition-colors py-3 border-primary-500 rounded-md'
          ])}
        ></textarea>
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty
              ? 'top-[10px] left-3  text-primary'
              : 'top-[-12px] left-2 text-primary-500 bg-[#111111] px-2',
            error
              ? 'text-red-600'
              : 'peer-focus:text-primary-500 peer-focus:top-[-13px] peer-focus:bg-[#111111] peer-focus:px-2',
            'absolute peer-focus:top-[-12px] peer-focus:left-2 transition-all '
          ])}
        >
          {label}
        </label>
      </div>

      <p className="text-sm text-red-500">{error}</p>
    </div>
  )
}

export default TextTarea

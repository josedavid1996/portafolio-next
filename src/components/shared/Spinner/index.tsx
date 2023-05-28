import { classNames } from '../../../utils'

type Color = 'primary' | 'secondary' | 'white'

interface Props {
  color?: Color
  className?: string
}

const colors: Record<Color, string> = {
  white: 'border-t-white border-l-white',
  primary:
    'border-t-primary-300 dark:border-t-primary-500 border-l-primary-300 dark:border-l-primary-500',
  secondary:
    'border-t-secondary-300 dark:border-t-secondary-500 border-l-secondary-300 dark:border-l-secondary-500'
}

const Spinner = ({ color = 'primary', className }: Props) => {
  return (
    <div
      className={classNames([
        colors[color],
        className,
        'h-[40px] w-[40px] rounded-[50%] border-[4px] border-r-transparent border-b-transparent animate-spin mx-auto'
      ])}
    />
  )
}

export default Spinner

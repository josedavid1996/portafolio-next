// import './button.css'
export type ButtonVariant = 'solid' | 'outline' | 'ghost'

interface ButtonColors {
  white: string
  primary: string
  secondary: string
}

export const variants: Record<ButtonVariant, ButtonColors> = {
  solid: {
    primary:
      'text-white border-transparent border-0 bg-gradient-to-r from-primary to-primary hover:from-[#f9b53a] hover:to-[#ff59a8]',
    secondary:
      'text-white border-transparent bg-secondary hover:bg-secondary-500',
    white: 'text-secondary border-transparent bg-white hover:bg-gray-200'
  },
  outline: {
    white: 'btn-outline-white',
    primary:
      'text-primary border-primary border hover:bg-primary hover:text-white ',
    secondary: 'btn-outline-secondary'
  },
  ghost: {
    primary:
      'bg-transparent border-transparent text-primary hover:text-white hover:bg-primary',
    secondary:
      'bg-transparent border-transparent text-secondary hover:text-white hover:bg-secondary',
    white:
      'bg-transparent border-transparent text-white hover:text-secondary-500 hover:bg-white'
  }
}

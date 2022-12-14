import {
  memo,
  Suspense,
  // FunctionComponent,
  // LazyExoticComponent,
  RefObject,
  SVGProps
} from 'react'
import dynamic from 'next/dynamic'
export type IconName = 'start' | 'menu' | 'close' | 'arrow-down'

// type SVGLazyComponent = LazyExoticComponent<
//   FunctionComponent<
//     SVGProps<SVGSVGElement> & {
//       title?: string | undefined
//     }
//   >
// >

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
  ref?:
    | ((instance: SVGSVGElement | null) => void)
    | RefObject<SVGSVGElement>
    | null
    | undefined
}
// Poner tipo
const icons: Record<IconName, any> = {
  start: dynamic(() => import('../../../assets/icons/star-regular.svg')),
  menu: dynamic(() => import('@assets/icons/bars-solid.svg')),
  close: dynamic(() => import('@assets/icons/xmark-solid.svg')),
  'arrow-down': dynamic(() => import('@assets/icons/arrow-down-solid.svg'))
}
const Icon = ({ name, ...props }: Props) => {
  const Component = icons[name]

  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

export default memo(Icon)

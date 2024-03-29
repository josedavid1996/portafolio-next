import {
  memo,
  Suspense,
  // FunctionComponent,
  // LazyExoticComponent,
  RefObject,
  SVGProps
} from 'react'
import dynamic from 'next/dynamic'
export type IconName =
  | 'start'
  | 'menu'
  | 'close'
  | 'arrow-down'
  | 'home'
  | 'user'
  | 'gear'
  | 'project'
  | 'contact'
  | 'html'
  | 'react'
  | 'css'
  | 'wordpress'
  | 'bootstrap'
  | 'next'
  | 'graphql'
  | 'tailwind'
  | 'typescript'

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
  'arrow-down': dynamic(() => import('@assets/icons/arrow-down-solid.svg')),
  home: dynamic(() => import('@assets/icons/house-solid.svg')),
  user: dynamic(() => import('@assets/icons/user-solid.svg')),
  gear: dynamic(() => import('@assets/icons/gear-solid.svg')),
  project: dynamic(() => import('@assets/icons/project-solid.svg')),
  contact: dynamic(() => import('@assets/icons/contact.svg')),
  html: dynamic(() => import('@assets/icons/html5.svg')),
  react: dynamic(() => import('@assets/icons/react.svg')),
  css: dynamic(() => import('@assets/icons/css.svg')),
  wordpress: dynamic(() => import('@assets/icons/wordpress.svg')),
  bootstrap: dynamic(() => import('@assets/icons/bootstrap.svg')),
  next: dynamic(() => import('@assets/icons/next.svg')),
  graphql: dynamic(() => import('@assets/icons/graphql.svg')),
  tailwind: dynamic(() => import('@assets/icons/tailwind.svg')),
  typescript: dynamic(() => import('@assets/icons/typescript.svg'))
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

import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  const mergedClassName = twMerge(
    'container flex justify-between items-center px-18 py-6 mx-auto',
    className
  )

  return (
    <div className={mergedClassName}>
      {children}
    </div>
  )
}

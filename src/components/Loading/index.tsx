import { CircleNotch } from 'phosphor-react'

interface ILoadingProps {
  size?: number
}

export function Loading({ size = 56 }: ILoadingProps) {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <CircleNotch
        role="svg"
        size={size}
        weight="bold"
        className="animate-spin"
      />
    </div>
  )
}

interface ITitleProps {
  children: React.ReactNode
}

export function Title({ children }: ITitleProps) {
  return (
    <h1 className="flex gap-4 px-4 justify-center items-center text-4xl wra leading-9 text-center">
      {children}
    </h1>
  )
}

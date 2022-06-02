interface IButtonDeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function ButtonDelete({ children, ...rest }: IButtonDeleteProps) {
  return (
    <button
      {...rest}
      className="px-2 rounded-md font-medium bg-red-400 dark:bg-red-800 hover:brightness-110 hover:shadow-sm hover:shadow-red-600"
    >
      {children}
    </button>
  )
}

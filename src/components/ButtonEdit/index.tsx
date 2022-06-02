interface IButtonEditProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function ButtonEdit({ children, ...rest }: IButtonEditProps) {
  return (
    <button
      {...rest}
      className="px-2 rounded-md font-medium bg-green-400 dark:bg-green-800 hover:brightness-110 hover:shadow-sm hover:shadow-green-600"
    >
      {children}
    </button>
  )
}

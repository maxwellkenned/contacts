interface IButtonAddProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function ButtonAdd({ children, ...rest }: IButtonAddProps) {
  return (
    <button
      {...rest}
      className="p-2 px-3 rounded-md font-medium bg-sky-400 dark:bg-sky-800 hover:brightness-110 hover:shadow-sm hover:shadow-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

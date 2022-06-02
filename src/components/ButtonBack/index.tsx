interface IButtonBackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function ButtonBack({ children, ...rest }: IButtonBackProps) {
  return (
    <button
      {...rest}
      className="p-2 px-3 rounded-md font-medium bg-slate-200 dark:bg-slate-800 hover:brightness-110 hover:shadow-sm hover:shadow-slate-600"
    >
      {children}
    </button>
  )
}

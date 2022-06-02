import { Path, UseFormRegister } from 'react-hook-form'
import { FormContactProps } from '../../types/contacts'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<FormContactProps>
  name: Path<FormContactProps>
  label?: string
  required?: boolean
  error?: boolean
}

export function Input({
  name,
  label,
  register,
  required,
  error,
  ...props
}: IInputProps) {
  const registerForm = register ? register(name, { required }) : undefined

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        {...registerForm}
        {...props}
        className="text-slate-900"
      />
      {error && <span role="alert">{`Por favor, informe o ${label}`}</span>}
    </div>
  )
}

import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { FormContactProps } from '../../types/contacts'
import { ButtonAdd } from '../ButtonAdd'
import { ButtonBack } from '../ButtonBack'
import { Input } from '../Input'
import { Loading } from '../Loading'

interface IFormProps {
  onSubmit: (data: FormContactProps) => void
  handleBack: () => void
  initialData?: FormContactProps
}

export function Form({ onSubmit, handleBack, initialData }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormContactProps>({
    mode: 'onChange',
    defaultValues: useMemo(() => initialData, [initialData])
  })

  return (
    <form
      aria-label="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full"
    >
      <Input disabled type="hidden" name="id" register={register} />

      <Input
        type="text"
        name="name"
        label="Nome"
        register={register}
        required
        error={!!errors.name}
      />

      <Input
        type="email"
        name="email"
        label="E-mail"
        register={register}
        required
        error={!!errors.email}
      />

      <Input
        type="tel"
        name="phone"
        label="Telefone"
        register={register}
        required
        error={!!errors.phone}
      />

      <div className="mt-4 flex gap-8 md:gap-20">
        <ButtonAdd
          disabled={isSubmitting}
          style={{ width: '100%' }}
          type="submit"
        >
          {isSubmitting ? (
            <span className="flex gap-2 items-center justify-center">
              <Loading size={24} /> Salvando...
            </span>
          ) : (
            'Salvar'
          )}
        </ButtonAdd>
        <ButtonBack style={{ width: '100%' }} onClick={handleBack}>
          Voltar
        </ButtonBack>
      </div>
    </form>
  )
}

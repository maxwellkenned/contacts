import { useNavigate } from 'react-router-dom'
import { IdentificationCard } from 'phosphor-react'

import { Form } from '../../components/Form'
import { Title } from '../../components/Title'
import { postContacts } from '../../services/postContact'
import { FormContactProps } from '../../types/contacts'

export function ContactCreate() {
  const navigate = useNavigate()
  const onSubmit = async (data: FormContactProps) => {
    await postContacts(data)
    navigate('/')
  }

  function handleBack() {
    navigate('/')
  }

  return (
    <main className="flex flex-col items-center gap-4 md:gap-8 m-8 p-8 py-12 mx-[5%] md:mx-[15%] lg:mx-[20%] 2xl:mx-[30%] bg-slate-50 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-md dark:shadow-xl">
      <Title>
        <IdentificationCard size={56} />
        Adicionar contato
      </Title>
      <Form onSubmit={onSubmit} handleBack={handleBack} />
    </main>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IdentificationCard } from 'phosphor-react'

import { Form } from '../../components/Form'
import { Title } from '../../components/Title'
import { postContacts } from '../../services/postContact'
import { ContactProps, FormContactProps } from '../../types/contacts'
import { getContactById } from '../../services/getContactById'
import { Loading } from '../../components/Loading'
import { putContact } from '../../services/putContact'

export function ContactEdit() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const { contactId } = useParams<{ contactId: string }>()

  const [contact, setContact] = useState<ContactProps>()

  const onSubmit = async (data: FormContactProps) => {
    contactId && (await putContact(contactId, data))
    navigate('/')
  }

  function handleBack() {
    navigate('/')
  }

  useEffect(() => {
    contactId &&
      getContactById(contactId)
        .then((contact) => contact && setContact(contact))
        .finally(() => setLoading(false))
  }, [contactId])

  return (
    <main className="flex flex-col items-center gap-4 md:gap-8 m-8 p-8 py-12 mx-[5%] md:mx-[15%] lg:mx-[20%] 2xl:mx-[30%] bg-slate-50 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-md dark:shadow-xl">
      <Title>
        <IdentificationCard size={56} />
        Editar contato
      </Title>

      {loading ? (
        <Loading />
      ) : (
        <Form
          onSubmit={onSubmit}
          handleBack={handleBack}
          initialData={contact}
        />
      )}
    </main>
  )
}

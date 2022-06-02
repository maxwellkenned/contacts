import { debounce } from 'lodash'
import { AddressBook } from 'phosphor-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonAdd } from '../../components/ButtonAdd'
import { Loading } from '../../components/Loading'
import { Search } from '../../components/Search'
import { TableContacts } from '../../components/TableContacts'
import { Title } from '../../components/Title'
import { deleteContact } from '../../services/deleteContact'
import { getContactByName } from '../../services/getContactByName'
import { getContacts } from '../../services/getContacts'
import { ContactProps } from '../../types/contacts'

export function ContactList() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [contacts, setContacts] = useState<ContactProps[]>([])
  const handleDebaunceSearch = useRef(
    debounce(async (search) => {
      await getContactByName(search).then(
        (contacts) => contacts && setContacts(contacts)
      )
    }, 500)
  ).current

  function handleAddContact() {
    navigate('/add')
  }

  const handleEditContact = useCallback((id: number) => {
    navigate(`/edit/${id}`)
  }, [])

  const handleDeleteContact = useCallback(
    async (id: number) => {
      const confirm = window.confirm('Deseja realmente excluir este contato?')

      if (!confirm) return

      await deleteContact(id)

      setContacts(contacts.filter((contact) => contact.id !== id))
    },
    [contacts]
  )

  console.log('contacts', contacts)

  useEffect(() => {
    getContacts()
      .then((contacts) => contacts && setContacts(contacts))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="flex flex-col gap-8 items-center justify-center p-8">
      <header className="flex md:gap-8 justify-center">
        <Title>
          <AddressBook size={56} />
          Lista de Contatos
        </Title>
        <ButtonAdd onClick={handleAddContact}>Adicionar novo contato</ButtonAdd>
      </header>

      <section className="w-full md:w-96">
        <Search onSearch={handleDebaunceSearch} />
      </section>

      <section>
        {loading ? (
          <Loading />
        ) : (
          contacts && (
            <TableContacts
              contacts={contacts}
              handleEdit={handleEditContact}
              handleDelete={handleDeleteContact}
            />
          )
        )}
      </section>
    </main>
  )
}

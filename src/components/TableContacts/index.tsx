import { ContactProps } from '../../types/contacts'
import { ButtonDelete } from '../ButtonDelete'
import { ButtonEdit } from '../ButtonEdit'

interface ITableContactsProps {
  contacts: ContactProps[]
  handleEdit?: (id: number) => void
  handleDelete?: (id: number) => void
}

export function TableContacts({
  contacts,
  handleEdit,
  handleDelete
}: ITableContactsProps) {
  if (!contacts.length) {
    return <h1>Sem dados cadastrados</h1>
  }

  return (
    <div className="flex flex-col">
      <div className="flex-grow max-h-[75vh] w-screen max-w-min overflow-auto p-4 m-4 bg-slate-50 dark:bg-slate-700 rounded-sm ring-1 ring-slate-900/5 shadow-md dark:shadow-xl">
        <table className="border border-gray-300 dark:border-slate-500 mb-[20vh] md:mb-[15vh] lg:mb-[2vh]">
          <thead>
            <tr className="text-lg bg-slate-300 dark:bg-slate-800">
              <th className="border border-gray-300 dark:border-slate-500 p-2 px-10">
                Nome
              </th>
              <th className="border border-gray-300 dark:border-slate-500 p-2 px-10">
                Email
              </th>
              <th className="border border-gray-300 dark:border-slate-500 p-2 px-10">
                Telefone
              </th>
              <th className="border border-gray-300 dark:border-slate-500 p-2 px-10">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {contacts.map((contact, index) => (
              <tr
                key={contact.id}
                className={[
                  'transition duration-300 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-500',
                  index % 2 ? `bg-gray-200 dark:bg-slate-600` : ''
                ].join(' ')}
              >
                <td className=" border-gray-300 dark:border-slate-500 p-1 md:p-2 whitespace-nowrap">
                  {contact.name}
                </td>
                <td className=" border-gray-300 dark:border-slate-500 p-1 md:p-2 whitespace-nowrap">
                  {contact.email}
                </td>
                <td className=" border-gray-300 dark:border-slate-500 p-1 md:p-2 whitespace-nowrap">
                  {contact.phone}
                </td>
                <td className="flex gap-4 border-gray-300 dark:border-slate-500 p-1 md:p-2 whitespace-nowrap">
                  <ButtonEdit
                    onClick={() => handleEdit && handleEdit(contact.id)}
                  >
                    Editar
                  </ButtonEdit>
                  <ButtonDelete
                    onClick={() => handleDelete && handleDelete(contact.id)}
                  >
                    Excluir
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

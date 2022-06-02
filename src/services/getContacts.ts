import { ContactProps } from '../types/contacts'

export const getContacts = async (): Promise<ContactProps[] | undefined> => {
  try {
    const data = await fetch('http://localhost:3333/contacts', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (err) {
    throw new Error('Error while fetching contacts')
  }
}

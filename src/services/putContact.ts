import { ContactProps } from '../types/contacts'

export const putContact = async (
  id: number | string,
  contact: ContactProps
): Promise<ContactProps[] | undefined> => {
  try {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (err) {
    throw new Error(`Error while fetching contact ${id}`)
  }
}

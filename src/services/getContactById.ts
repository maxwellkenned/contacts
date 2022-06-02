import { ContactProps } from '../types/contacts'

export const getContactById = async (
  id: string | number
): Promise<ContactProps | undefined> => {
  try {
    const data = await fetch(`http://localhost:3333/contacts/${id}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (err) {
    throw new Error(`Error while fetching contact ${id}`)
  }
}

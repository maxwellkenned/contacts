import { ContactProps } from '../types/contacts'

export const getContactById = async (
  id: string | number
): Promise<ContactProps | undefined> => {
  try {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (err) {
    throw new Error(`Error while fetching contact ${id}`)
  }
}

import { ContactProps } from '../types/contacts'

export const getContactByName = async (
  name: string
): Promise<ContactProps[] | undefined> => {
  try {
    const data = await fetch(
      `http://localhost:3333/contacts?name_like=${name}`,
      {
        method: 'GET'
      }
    )
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (err) {
    throw new Error(`Error while searching contact ${name}`)
  }
}

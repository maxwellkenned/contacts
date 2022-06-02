import { FormContactProps } from '../types/contacts'

export const postContacts = async (data: FormContactProps) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (err) {
    throw new Error('Error while posting contacts')
  }
}

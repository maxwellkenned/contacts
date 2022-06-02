import { FormContactProps } from '../types/contacts'

export const postContacts = async (data: FormContactProps) => {
  try {
    await fetch('http://localhost:3333/contacts', {
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

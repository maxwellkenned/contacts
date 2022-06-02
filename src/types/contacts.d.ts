export type ContactProps = {
  id: number
  name: string
  email: string
  phone: string
}

export type FormContactProps = Partial<ContactProps, 'id'>

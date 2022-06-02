export const deleteContact = async (id: number) => {
  try {
    await fetch(`http://localhost:3333/contacts/${id}`, {
      method: 'DELETE'
    })
  } catch (err) {
    throw new Error(`Error while deleting contact ${id}`)
  }
}

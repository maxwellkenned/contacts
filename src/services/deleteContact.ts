export const deleteContact = async (id: number) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/contacts/${id}`, {
      method: 'DELETE'
    })
  } catch (err) {
    throw new Error(`Error while deleting contact ${id}`)
  }
}

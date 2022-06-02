import { BrowserRouter, Routes as RoutesStack, Route } from 'react-router-dom'

import { ContactCreate } from '../screens/ContactCreate'
import { ContactEdit } from '../screens/ContactEdit'
import { ContactList } from '../screens/ContactList'

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesStack>
        <Route path="/" element={<ContactList />} />
        <Route path="add" element={<ContactCreate />} />
        <Route path="edit/:contactId" element={<ContactEdit />} />
      </RoutesStack>
    </BrowserRouter>
  )
}

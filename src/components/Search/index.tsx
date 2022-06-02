import { useRef } from 'react'

interface ISearchProps {
  onSearch: (search?: string) => void
}

export function Search({ onSearch }: ISearchProps) {
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <input
      className="w-full text-slate-900"
      ref={searchRef}
      name="search"
      type="search"
      placeholder="Buscar contato pelo nome"
      onChange={() => onSearch(searchRef.current?.value)}
    />
  )
}

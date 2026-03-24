import type React from "react"
import "../../../styles/SearchForm.css"

type SearchFormProps = {
  city: string
  onCityChange: (value: string) => void
  onSearch: () => void
}

export default function SearchForm({ city, onCityChange, onSearch }: SearchFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => onCityChange(event.target.value)}
      ></input>
      <button className="form-btn" type="submit">
        Search
      </button>
    </form>
  )
}

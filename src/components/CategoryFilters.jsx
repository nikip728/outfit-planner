import { useState } from 'react'
import './CategoryFilters.css'

function CategoryFilters() {
  const [categories, setCategories] = useState([
    'All',
    'Tops',
    'Skirts',
    'Pants',
    'Dresses',
    'Shoes',
    'Other',
  ])

const [selectedCategories, setSelectedCategories] = useState([])
const [newCategory, setNewCategory] = useState('')


  return (
    <nav className="category-filters">
      {categories.map((category) => (
        <button
  key={category}
  className={
  category === 'All'
    ? selectedCategories.length === 0
      ? 'selected'
      : ''
    : selectedCategories.includes(category)
      ? 'selected'
      : ''
}
  onClick={() => {
  if (category === 'All') {
    setSelectedCategories([])
    return
  }

  if (selectedCategories.includes(category)) {
    setSelectedCategories(
      selectedCategories.filter((item) => item !== category)
    )
  } else {
    setSelectedCategories([...selectedCategories, category])
  }
}}
>
          {category}
        </button>
            ))}

      <input
        type="text"
        value={newCategory}
        onChange={(event) => setNewCategory(event.target.value)}
        placeholder="New category"
      />

      <button
        onClick={() => {
          const trimmedCategory = newCategory.trim()

          if (trimmedCategory === '') {
            return
          }

          if (categories.includes(trimmedCategory)) {
            return
          }

          setCategories([...categories, trimmedCategory])
          setSelectedCategories([...selectedCategories, trimmedCategory])
          setNewCategory('')
        }}
      >
        + Add category
      </button>
    </nav>
  )
}

export default CategoryFilters
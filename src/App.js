import { useState } from 'react'
import './App.css'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        {items.map((menuItems) => {})}
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App

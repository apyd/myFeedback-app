import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/roadmap">Roadmap</Link>
        </li>
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
        <button>Logout</button>
      </ul>
    </nav>
  )
}

export default MainNavigation

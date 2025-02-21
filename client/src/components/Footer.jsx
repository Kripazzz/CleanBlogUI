import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <ul className="footer_categories">
            
            <li><Link to="/posts/categories/:Agriculture">Agriculture</Link></li>
            <li><Link to="/posts/categories/:Business">Bussiness</Link></li>
            <li><Link to="/posts/categories/:Education">Education</Link></li>
            <li><Link to="/posts/categories/:Art">Art</Link></li>
            <li><Link to="/posts/categories/:Investiment">Investiment</Link></li>
            <li><Link to="/posts/categories/:Uncategorized">Uncategorized</Link></li>
            <li><Link to="/posts/categories/:Weather">Weather</Link></li>

        </ul>
        <div className="footer_copyright">
            <small>All Rights Reserved &copy; Copyright, myigyeozzz Tutorials.</small>
        </div>
    </footer>
  )
}

export default Footer
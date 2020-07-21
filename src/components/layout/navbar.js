import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
            <nav className="navbar">
                <h3>
                    <Link to='/' className="btn1">
                            На главную
                    </Link>
                </h3>
                <ul>
                <li>
                    <Link to="/1" className="btn">
                        Контактная информация
                    </Link>
                </li>
                <li>
                    <Link to="/2" className="btn">
                        Задонатить
                    </Link>
                </li>
            </ul>
            </nav>
             
             
    )
}

export default Navbar

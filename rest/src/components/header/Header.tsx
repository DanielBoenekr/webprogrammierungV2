//logo und Json Datei werden importiert

import React from 'react';
import './Header.css';
import menuItems from './menuItems.json';
import logo from './logolele.png';


//einzelene Items aus der Json Datei werden geladen
//und in der Navigationbar angezeigt
//Json Objekt hat die Struktur: id, label, href (siehe menuItems.json)

function Navigationbar(){
    return(
    <div className="NavigationBar">
    <nav>
    <ul>
        {menuItems.map((menuItem: { id: number, label: string, href: string }) => (
            <li key={menuItem.id}>
                <a href={menuItem.href}>{menuItem.label}</a>
            </li>
        ))}
    </ul>
</nav>
</div>
    );
}

function Header() {
    return (
        <div className='AllHeader'>
            <div className="Header">
                    <img src={logo} alt="Logo" id='logo' />
            </div>
            <Navigationbar/>
        </div>
    );
}

export default Header;

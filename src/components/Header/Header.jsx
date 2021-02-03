import React from 'react'
import Style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={Style.header}>
            <div className={Style.item}>
                <Link to="/">Video Tube</Link>
            </div>
            <div className={Style.item}>
                <form>
                    <input type="text" placeholder="検索" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>

        </div>
    )
}

export default Header

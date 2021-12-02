// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    // const onAdd = () =>{
    //     console.log('==Click==');
    // }
    return (
        <header className="header">
            <h1 style={{ color: 'red' }}>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

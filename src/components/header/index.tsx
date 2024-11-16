import React from 'react';
import './style.css';
import Dropdown from '../dropdown';


// Define an interface for the props
interface HeaderProps {
    grouping: string;
    setGrouping: (grouping: string) => void;
    ordering: string;
    setOrdering: (ordering: string) => void;
}

const Header: React.FC<HeaderProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
    return (
        <header>
            <Dropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
};

export default Header;

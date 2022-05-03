import React, {useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect (() => {
        const onBodyClick = (event) => {
            
            // ako je kliknut unutar ref.current onda izlazimo iz funkcije
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        // eventi sa addEventListener se uvek prvi trigeruju pa onda ostali
        document.body.addEventListener('click', onBodyClick);

        //Clean UP funkcija ako se ukloni Dropdown da pocisti eventelistenere
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []);
    
    const renderedOptions = options.map ((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    //ref.current referenca na tag ui form

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
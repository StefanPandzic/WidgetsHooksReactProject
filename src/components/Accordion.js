import React, { useState } from "react";

//skracena verzija props mozemo napisati samo atribute u viticastim zagradama
const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

           
    const onTitleClicked = (index) => {
            setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';


        // svaka lista mora imate Key property
        //React Fragment nije HTML element stavljamo ga samo
        // da ne bi semantic ui pravio duplu liniju na div
        return <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClicked(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    });


    return (
    <div className="ui styled accordion">
        {renderedItems}
    </div>
    );
};

export default Accordion;
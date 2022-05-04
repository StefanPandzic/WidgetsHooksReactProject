import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {

        //Da bi mogli drzati Crtl dugme i click misa otvara se novi tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }


        //sprecavamo reload
        event.preventDefault();
        //Menjamo URL bez reload stranice
        window.history.pushState({}, '', href);

        //Ovo ce da se pobrine kad se promenio URL nije toliko bitno da znamo sta radi
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };


    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;
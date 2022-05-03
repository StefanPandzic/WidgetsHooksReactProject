import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },

];

const items = [
    {
        title: 'What is React?',
        content: 'React is front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
];



export default () => {

    return (
        <div>
            <Translate />
        </div>
    );
};
import { useState } from "react";
import MenuButton from "../components/buttons/MenuButton";
import './styles.css';

const MainMenu = () => {
    const menuItems = ['Play', 'Options', 'About', 'Exit'];

    const switchPages = (title: string) => {
        switch(title) {
            case 'Play':
                return;
            case 'Options':
                return;
            case 'About': 
                return;
            case 'Exit': 
                return;
        }
    }

    const onPressButton = (title: string) => {
        switchPages(title);
    }

    return (
        <div className="main-menu-wrapper">
            <div className="menu-list-wrapper">
                {
                    menuItems.map((item) => {
                        return (
                            <MenuButton title={item} onPress={() => onPressButton(item)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainMenu;
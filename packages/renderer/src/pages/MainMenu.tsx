import { useState } from "react";
import { MenuButton } from "../components";
import './styles.css';
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const menuItems = ['Play', 'Options', 'About'];
    const navigate = useNavigate();

    const switchPages = (title: string) => {
        switch(title) {
            case 'Play':
                return navigate('/play');
            case 'Options':
                return navigate('/options');
            case 'About': 
                return navigate('/about');
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
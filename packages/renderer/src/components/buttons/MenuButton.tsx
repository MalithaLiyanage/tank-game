import './styles.css'

const MenuButton = (props: {title: string, onPress: (e:  React.MouseEvent<HTMLButtonElement>) => void}) => {
    const { title, onPress } = props;
    return (
        <button className='menu-button' onClick={onPress}>
            <h1>{title}</h1>
        </button>
    )
}

export default MenuButton;
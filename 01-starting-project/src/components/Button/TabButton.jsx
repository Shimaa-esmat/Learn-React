export default function TapButton({children, onSelect, isSelected, ...props}){


    return (
        <li>
            <button className={isSelected ? 'active': undefined} {...props}></button>
        </li>
    );
}
export default function Button(props) {
    const { onClick, className, icon, children } = props;

    return (
        <button className={className} onClick={onClick}>
            {icon}
            {children}
        </button>
    );
}
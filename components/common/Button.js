const Button = props => {
    const { icon, children, ...rest } = props;

    return (
        <button {...rest}>
            {icon}
            {children}
        </button>
    );
}

export default Button;
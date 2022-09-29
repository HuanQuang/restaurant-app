import './button.scss';
import { Link } from 'react-router-dom';
function Button({ children, to, href, ...props }) {
    let Comp = 'button';
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const Classes = ['normal'];

    return (
        <Comp className={Classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;

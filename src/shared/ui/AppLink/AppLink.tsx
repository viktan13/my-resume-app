import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum ApplinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: ApplinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const {className, theme = ApplinkTheme.PRIMARY, children, to, ...otherProps} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

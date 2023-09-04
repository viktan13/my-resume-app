import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes} from "react";

export enum ButtonTheme {
    CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme;
}

export const Button = ({className, children, theme, ...otherProps}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

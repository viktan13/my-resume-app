import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, type ReactElement, useEffect, useRef } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
    autoFocus?: boolean
}

export const Input = memo((props: InputProps): ReactElement => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        autoFocus,
        ...otherProps
    } = props

    function onChangeHandler (e: ChangeEvent<HTMLInputElement>): void {
        onChange?.(e.target.value)
    }

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus()
        }
    })

    const ref = useRef<HTMLInputElement>()

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {label && <div className={cls.label}>{label}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    )
})

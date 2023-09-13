import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePicture.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import profilePic from 'shared/assets/photos/MyPhoto-complete.png'
import { type ReactElement } from 'react'

export interface ProfilePictureProps {
    className?: string
}

export const ProfilePicture = ({ className }: ProfilePictureProps): ReactElement => {
    return (
        <div className={classNames(cls.ProfilePicture, {}, [className])}>
            <Avatar size={170} src={profilePic}/>
        </div>
    )
}

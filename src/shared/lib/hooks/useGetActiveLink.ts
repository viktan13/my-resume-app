import { type SidebarMenuItem } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

export const useGetActiveLink = (sidebarMenu: SidebarMenuItem[]): string => {
    const location = useLocation()
    return sidebarMenu.find(el => el.path === location.pathname).name
}

import DesktopHeader from './desktopHeader'
import MobileHeader from './mobileHeader'
import CheckMobileHook480 from '../../components/checkMobile'
export default function WebHeader() {
    const isMobile = CheckMobileHook480();
    return isMobile ?
        <MobileHeader />
        :
        <DesktopHeader />
}

import WebHeader from './userHeader'
import WebFooter from './userFooter'
import UserRoutes from '../userRoutes'
export default function UserLayout({ children }) {
    return (
        <div className='w-full bg-[redd]'>
            <div className='h-[60px]'>
                <WebHeader />
            </div>
            <div className='min-h-[calc(100vh-60px)]'>
                <UserRoutes />
            </div>
            <div className='h-[200px]'>
                <WebFooter />
            </div>
        </div>
    )
}

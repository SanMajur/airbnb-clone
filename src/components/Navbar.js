import airbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <div className="py-6 px-8 md:px-1 h-[70px] shadow-md text-center ">
            <div className='md:max-w-xl lg:max-w-3xl mx-auto'>
                <img src={airbnbLogo} alt="airbnb logo" className='w-[82px] h-[25px]'/>
            </div>
            
        </div>
    )
}
import logo from '../../public/img/logo-completa.svg'

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 h-25 flex justify-center items-center">
            <div className='flex justify-between items-center min-w-300 justify-self-center '>
            <img src={logo} alt="Logo" className="h-10" />
            <nav>
                <ul className="flex gap-5">
                    <li><a href="">Projetos</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;

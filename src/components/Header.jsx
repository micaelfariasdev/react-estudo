import logo from '../../public/img/logo-completa.svg'

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 h-25 flex justify-center items-center w-full">
            <div className='flex justify-between items-center max-w-300 w-full justify-self-center '>
                <a href="/">
                    <img src={logo} alt="Logo" className="h-10" />
                </a>
                <nav>
                    <ul className="flex gap-5">
                        <li><a href="#projetos">Projetos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

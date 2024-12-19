export default function Navbar() {
    return (
        <nav className="bg-blue-500 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Navbar</h1>
                <ul className="flex space-x-4">
                    <li className="hover:text-blue-300 cursor-pointer">Home</li>
                    <li className="hover:text-blue-300 cursor-pointer">About</li>
                    <li className="hover:text-blue-300 cursor-pointer">Contact</li>
                </ul>
            </div>
            <hr className="border-t border-blue-400" />
        </nav>
    );
}

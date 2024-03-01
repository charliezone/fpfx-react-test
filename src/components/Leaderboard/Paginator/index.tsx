export function Paginator() {
    return (
        <nav>
            <ul className="flex gap-1">
                <li className="bg-cyprus rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">Prev</a></li>
                <li className="bg-primary rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">1</a></li>
                <li className="bg-cyprus rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">2</a></li>
                <li className="bg-cyprus rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">3</a></li>
                <li className="bg-cyprus rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">4</a></li>
                <li className="bg-cyprus rounded-md"><a className="px-2 py-1 cursor-pointer text-sm font-semibold text-cloudy">Next</a></li>
            </ul>
        </nav>
    );
}
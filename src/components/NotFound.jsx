
export default function NotFound() {
    return (
        <main className="bg-[#0a0a1a] bg-gradient-to-tl from-[#151549] via-[#121224] to-[#0f0f1a]  text-white flex justify-center flex-col items-center">
            <div className="w-full h-screen flex justify-center items-center">
                <svg className="w-2/4 h-2/4">
                    <rect width="100%" height="100%" fill="gray" rx='20' />
                    <rect y='-3' width="100%" height="20%" fill="#151549" rx='20' />
                    <rect y='10%' width="100%" height="20%" fill="gray" />
                    <circle cx="20" cy="20" r="7" fill="green" />
                    <circle cx="40" cy="20" r="7" fill="orange" />
                    <circle cx="60" cy="20" r="7" fill="red" />
                    <text x="50%" y="50%" font-size="180" fill="white" text-anchor="middle">
                        404
                    </text>
                    <text x="50%" y="75%" font-size="80" fill="white" text-anchor="middle">
                        Page
                        Not Found
                    </text>
                </svg>
            </div>
        </main>
    );
}


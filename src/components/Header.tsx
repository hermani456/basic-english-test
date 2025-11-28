import { BookOpen } from 'lucide-react';

const Header = () => (
    <header className="bg-blue-800 text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            <div>
                <h1 className="text-2xl font-bold">English Formative Assessment</h1>
                <p className="text-blue-200">Unit 3: Future Plans & Projections</p>
            </div>
        </div>
    </header>
);

export default Header;

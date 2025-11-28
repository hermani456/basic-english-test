import React from 'react';
import { CheckCircle, RefreshCcw, Home } from 'lucide-react';

interface Question {
    id: string;
    question: string;
    options: string[];
    answer: number;
}

interface Section {
    questions: Question[];
}

interface Assessment {
    reading: Section;
    listening: Section;
    grammar: Section;
    writing: {
        modelAnswer: string;
    };
}

interface ResultsViewProps {
    assessment: Assessment;
    answers: Record<string, number>;
    writingAnswer: string;
    onReset: () => void;
    onHome: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ assessment, answers, writingAnswer, onReset, onHome }) => {
    const calculateScore = (section: keyof Assessment) => {
        let correct = 0;
        // @ts-ignore
        assessment[section].questions.forEach((q: Question) => {
            if (answers[q.id] === q.answer) correct++;
        });
        return correct;
    };

    const readingScore = calculateScore('reading');
    const listeningScore = calculateScore('listening');
    const grammarScore = calculateScore('grammar');
    const totalScore = readingScore + listeningScore + grammarScore;
    const maxScore = assessment.reading.questions.length + assessment.listening.questions.length + assessment.grammar.questions.length;

    const renderReview = (section: keyof Assessment, title: string) => (
        <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">{title} Review</h3>
            {/* @ts-ignore */}
            {assessment[section].questions.map((q: Question, idx: number) => {
                const isCorrect = answers[q.id] === q.answer;
                return (
                    <div key={q.id} className={`mb-4 p-4 rounded border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                        <p className="font-medium mb-2">{idx + 1}. {q.question}</p>
                        <div className="text-sm">
                            <p><span className="font-semibold">Your Answer:</span> {q.options[answers[q.id]] || "No answer"}</p>
                            {!isCorrect && <p className="text-green-700 mt-1"><span className="font-semibold">Correct Answer:</span> {q.options[q.answer]}</p>}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
            <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900">Assessment Complete!</h2>
                <p className="text-xl text-gray-600 mt-2">You scored <span className="font-bold text-blue-600">{totalScore}</span> out of <span className="font-bold">{maxScore}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-sm text-gray-500 uppercase">Reading</p>
                    <p className="text-2xl font-bold text-blue-700">{readingScore}/{assessment.reading.questions.length}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-sm text-gray-500 uppercase">Listening</p>
                    <p className="text-2xl font-bold text-blue-700">{listeningScore}/{assessment.listening.questions.length}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-sm text-gray-500 uppercase">Grammar</p>
                    <p className="text-2xl font-bold text-blue-700">{grammarScore}/{assessment.grammar.questions.length}</p>
                </div>
            </div>

            {renderReview('reading', 'Reading Comprehension')}
            {renderReview('listening', 'Listening Comprehension')}
            {renderReview('grammar', 'Language Use')}

            <div className="mb-8 p-4 bg-yellow-50 rounded border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Writing Section Review</h3>
                <p className="text-sm text-gray-600 mb-2">Self-Assessment: Compare your text with the model answer.</p>
                <div className="mb-4">
                    <p className="font-semibold text-gray-700">Your Response:</p>
                    <p className="italic text-gray-800 bg-white p-3 rounded border mt-1">{writingAnswer || "No response provided."}</p>
                </div>
                <div>
                    <p className="font-semibold text-green-700">Model Answer:</p>
                    <p className="text-gray-800 bg-white p-3 rounded border mt-1 border-green-200">{assessment.writing.modelAnswer}</p>
                </div>
            </div>

            <div className="flex gap-4 justify-center">
                <button onClick={onReset} className="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors">
                    <RefreshCcw className="w-5 h-5 mr-2" /> Retry This Assessment
                </button>
                <button onClick={onHome} className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    <Home className="w-5 h-5 mr-2" /> Back to Menu
                </button>
            </div>
        </div>
    );
};

export default ResultsView;

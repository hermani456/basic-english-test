import React from 'react';

interface QuestionData {
    id: string;
    question: string;
    options: string[];
}

interface QuestionBlockProps {
    index: number;
    data: QuestionData;
    selected: number;
    onSelect: (questionId: string, optionIndex: number) => void;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ index, data, selected, onSelect }) => (
    <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
        <p className="font-semibold text-gray-800 mb-3">{index + 1}. {data.question}</p>
        <div className="space-y-2">
            {data.options.map((opt, i) => (
                <label key={i} className={`flex items-center p-3 rounded cursor-pointer transition-colors ${selected === i ? 'bg-blue-100 border-blue-300' : 'bg-white hover:bg-gray-100'} border`}>
                    <input
                        type="radio"
                        name={data.id}
                        className="w-4 h-4 text-blue-600"
                        checked={selected === i}
                        onChange={() => onSelect(data.id, i)}
                    />
                    <span className="ml-3 text-gray-700">{opt}</span>
                </label>
            ))}
        </div>
    </div>
);

export default QuestionBlock;

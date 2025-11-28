import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Assessment {
    id: number;
    title: string;
    description: string;
}

interface AssessmentCardProps {
    assessment: Assessment;
    onSelect: (id: number) => void;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ assessment, onSelect }) => (
    <div
        onClick={() => onSelect(assessment.id)}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer border-l-4 border-blue-600 flex flex-col gap-2 group"
    >
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">{assessment.title}</h3>
        <p className="text-gray-600">{assessment.description}</p>
        <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Start Assessment <ArrowRight className="w-4 h-4 ml-1" />
        </div>
    </div>
);

export default AssessmentCard;

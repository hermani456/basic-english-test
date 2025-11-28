import { useState } from 'react';
import { BookOpen, Ear, ArrowRight, PenTool, FileText } from 'lucide-react';
import { assessments } from './data/assessments';
import Header from './components/Header';
import AssessmentCard from './components/AssessmentCard';
import QuestionBlock from './components/QuestionBlock';
import ResultsView from './components/ResultsView';

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('home'); // home, assessment, results
  const [currentAssessmentId, setCurrentAssessmentId] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [writingAnswer, setWritingAnswer] = useState("");

  const handleSelectAssessment = (id: number) => {
    setCurrentAssessmentId(id);
    setAnswers({});
    setWritingAnswer("");
    setView('assessment');
    window.scrollTo(0, 0);
  };

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit your answers?")) {
      setView('results');
      window.scrollTo(0, 0);
    }
  };

  const getCurrentAssessment = () => assessments.find(a => a.id === currentAssessmentId);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <Header />

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        {view === 'home' && (
          <div className="space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Select an Assessment</h2>
              <p className="text-gray-600 mt-2">Choose one of the variations below to practice your English skills.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessments.map(assessment => (
                <AssessmentCard key={assessment.id} assessment={assessment} onSelect={handleSelectAssessment} />
              ))}
            </div>
          </div>
        )}

        {view === 'assessment' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center sticky top-0 z-10">
              <h2 className="text-xl font-bold">{getCurrentAssessment()?.title}</h2>
              <button onClick={() => setView('home')} className="text-blue-100 hover:text-white text-sm underline">Exit</button>
            </div>

            <div className="p-8 space-y-12">
              {/* READING SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <BookOpen className="text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Reading Comprehension</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg mb-8 text-gray-800 leading-relaxed whitespace-pre-wrap border border-blue-100">
                  {getCurrentAssessment()?.reading.text}
                </div>
                {getCurrentAssessment()?.reading.questions.map((q, idx) => (
                  <QuestionBlock key={q.id} index={idx} data={q} selected={answers[q.id]} onSelect={handleAnswerSelect} />
                ))}
              </section>

              {/* LISTENING SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <Ear className="text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Listening Comprehension</h3>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-100">
                  <p className="font-semibold text-purple-800 mb-2">Instructions:</p>
                  <p className="text-sm text-purple-900 mb-4">Since audio is not available, please read the following Transcript carefully and answer the questions.</p>
                  <div className="p-4 bg-white rounded italic text-gray-700 border border-purple-200 whitespace-pre-wrap">
                    {getCurrentAssessment()?.listening.transcript}
                  </div>
                </div>
                {getCurrentAssessment()?.listening.questions.map((q, idx) => (
                  <QuestionBlock key={q.id} index={idx} data={q} selected={answers[q.id]} onSelect={handleAnswerSelect} />
                ))}
              </section>

              {/* GRAMMAR SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <FileText className="text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Language Use</h3>
                </div>
                <p className="mb-6 text-gray-600">Choose the correct future form (will / be going to) for each sentence.</p>
                {getCurrentAssessment()?.grammar.questions.map((q, idx) => (
                  <QuestionBlock key={q.id} index={idx} data={q} selected={answers[q.id]} onSelect={handleAnswerSelect} />
                ))}
              </section>

              {/* WRITING SECTION */}
              <section>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                  <PenTool className="text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Writing</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-md mb-4 border border-green-100">
                  <p className="font-bold text-green-900">Prompt:</p>
                  <p className="text-green-800">{getCurrentAssessment()?.writing.prompt}</p>
                </div>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all h-40"
                  placeholder="Type your answer here..."
                  value={writingAnswer}
                  onChange={(e) => setWritingAnswer(e.target.value)}
                />
                <p className="text-right text-sm text-gray-500 mt-2">{writingAnswer.split(" ").filter(w => w.length > 0).length} words</p>
              </section>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all transform hover:scale-[1.01] flex justify-center items-center gap-2"
              >
                Submit Assessment <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {view === 'results' && getCurrentAssessment() && (
          <ResultsView
            // @ts-ignore
            assessment={getCurrentAssessment()}
            answers={answers}
            writingAnswer={writingAnswer}
            onReset={() => {
              setAnswers({});
              setWritingAnswer("");
              setView('assessment');
              window.scrollTo(0, 0);
            }}
            onHome={() => setView('home')}
          />
        )}
      </main>
    </div>
  );
}
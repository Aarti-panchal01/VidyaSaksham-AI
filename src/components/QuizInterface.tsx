import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import type { QuizData } from "@/pages/Index";

interface QuizInterfaceProps {
  quiz: QuizData;
}

export const QuizInterface = ({ quiz }: QuizInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(quiz.length).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setSelectedOption(answer);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] || "");
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || "");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quiz.length).fill(""));
    setShowResults(false);
    setSelectedOption("");
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === quiz[index].answer ? 1 : 0);
    }, 0);
  };

  const progress = ((currentQuestion + 1) / quiz.length) * 100;
  const score = calculateScore();
  const percentage = Math.round((score / quiz.length) * 100);

  if (showResults) {
    return (
      <Card className="lesson-card border-0">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center">
              <Trophy className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">
              {score}/{quiz.length}
            </div>
            <div className="text-lg text-muted-foreground">
              You scored {percentage}%
            </div>
            <Progress value={percentage} className="w-full h-3" />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Review Your Answers:</h3>
            {quiz.map((question, index) => {
              const isCorrect = answers[index] === question.answer;
              return (
                <div key={index} className={`p-4 rounded-lg border ${
                  isCorrect ? 'bg-success-light/10 border-success-light' : 'bg-destructive/10 border-destructive/20'
                }`}>
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">{index + 1}. {question.q}</p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Your answer:</span>{" "}
                          <span className={isCorrect ? "text-success" : "text-destructive"}>
                            {answers[index] || "Not answered"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm">
                            <span className="font-medium">Correct answer:</span>{" "}
                            <span className="text-success">{question.answer}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button onClick={resetQuiz} className="w-full educational-button" size="lg">
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = quiz[currentQuestion];

  return (
    <Card className="lesson-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Quiz Question {currentQuestion + 1}</CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} / {quiz.length}
          </Badge>
        </div>
        <Progress value={progress} className="w-full h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium leading-relaxed">
            {currentQ.q}
          </h3>

          {currentQ.type === "mcq" && currentQ.options ? (
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border transition-all quiz-option ${
                    selectedOption === option
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/50 bg-card hover:bg-accent/50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedOption === option
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}>
                      {selectedOption === option && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground m-0.5" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Type your answer:
              </label>
              <Input
                value={selectedOption}
                onChange={(e) => handleAnswerSelect(e.target.value)}
                placeholder="Enter your answer here..."
                className="w-full"
              />
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedOption.trim()}
            className="educational-button"
          >
            {currentQuestion === quiz.length - 1 ? "Finish Quiz" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
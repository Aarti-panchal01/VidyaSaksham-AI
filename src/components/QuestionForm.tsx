import { useState } from "react";
import { Send, BookOpen, HelpCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface QuestionFormProps {
  onAskQuestion: (question: string, grade: string, language: string) => void;
  onGenerateQuiz: (topic: string, grade: string, numQuestions: number) => void;
  isLoading: boolean;
}

export const QuestionForm = ({ onAskQuestion, onGenerateQuiz, isLoading }: QuestionFormProps) => {
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [grade, setGrade] = useState("");
  const [language, setLanguage] = useState("en");
  const [numQuestions, setNumQuestions] = useState(3);

  const handleSubmitQuestion = () => {
    if (question.trim() && grade) {
      onAskQuestion(question.trim(), grade, language);
      setQuestion("");
    }
  };

  const handleSubmitQuiz = () => {
    if (topic.trim() && grade) {
      onGenerateQuiz(topic.trim(), grade, numQuestions);
      setTopic("");
    }
  };

  return (
    <Card className="lesson-card border-0 p-6">
      <CardContent className="p-0">
        <Tabs defaultValue="question" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="question" className="flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <span>Ask a Question</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Generate Quiz</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={grade} onValueChange={setGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Class 1</SelectItem>
                <SelectItem value="2">Class 2</SelectItem>
                <SelectItem value="3">Class 3</SelectItem>
                <SelectItem value="4">Class 4</SelectItem>
                <SelectItem value="5">Class 5</SelectItem>
                <SelectItem value="6">Class 6</SelectItem>
                <SelectItem value="7">Class 7</SelectItem>
                <SelectItem value="8">Class 8</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">Class 11</SelectItem>
                <SelectItem value="12">Class 12</SelectItem>
              </SelectContent>
            </Select>

            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                <SelectItem value="mr">मराठी (Marathi)</SelectItem>
                <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="social">Social Studies</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="question" className="space-y-4">
            <div className="space-y-4">
              <Textarea
                placeholder="Ask me anything about your studies... For example: 'Explain photosynthesis in simple terms' or 'How do I solve quadratic equations?'"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                className="resize-none"
              />
              <Button 
                onClick={handleSubmitQuestion} 
                disabled={!question.trim() || !grade || isLoading}
                className="w-full educational-button"
                size="lg"
              >
                {isLoading ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Thinking...</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" />Get Explanation</>
                )}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-4">
            <div className="space-y-4">
              <Input
                placeholder="Enter topic for quiz... e.g., 'Photosynthesis', 'Algebra', 'Indian History'"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Number of Questions:</label>
                <Select value={numQuestions.toString()} onValueChange={(v) => setNumQuestions(parseInt(v))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={handleSubmitQuiz} 
                disabled={!topic.trim() || !grade || isLoading}
                className="w-full educational-button"
                size="lg"
              >
                {isLoading ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Creating Quiz...</>
                ) : (
                  <><BookOpen className="h-4 w-4 mr-2" />Generate Quiz</>
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
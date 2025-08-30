import { Volume2, BookOpen, Lightbulb, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { LessonData } from "@/pages/Index";

interface LessonDisplayProps {
  lesson: LessonData;
}

export const LessonDisplay = ({ lesson }: LessonDisplayProps) => {
  const handlePlayAudio = () => {
    if (lesson.audio_url) {
      const audio = new Audio(lesson.audio_url);
      audio.play();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="lesson-card border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Lesson Explanation</span>
            </CardTitle>
            {lesson.audio_url && (
              <Button variant="outline" size="sm" onClick={handlePlayAudio}>
                <Volume2 className="h-4 w-4 mr-2" />
                Listen
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed">{lesson.explanation}</p>
          </div>
          
          {lesson.translated && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border">
              <h4 className="font-medium text-sm text-muted-foreground mb-2">Translated:</h4>
              <p className="text-base leading-relaxed">{lesson.translated}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="lesson-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-secondary" />
            <span>Example</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-secondary-light/20 rounded-lg border border-secondary-light">
            <p className="text-base leading-relaxed">{lesson.example}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="lesson-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-success" />
            <span>Practice Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {lesson.practice_questions.map((q, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <h4 className="font-medium mb-2">{index + 1}. {q.q}</h4>
              <details className="group">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground list-none">
                  <Button variant="outline" size="sm">Show Answer</Button>
                </summary>
                <div className="mt-3 p-3 bg-success-light/20 rounded border border-success-light">
                  <p className="text-sm">{q.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="lesson-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-warning" />
            <span>Key Takeaways</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {lesson.key_takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-0.5 text-xs">
                  {index + 1}
                </Badge>
                <span className="text-sm leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {lesson.sources.length > 0 && (
        <Card className="lesson-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
              <span>Sources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {lesson.sources.map((source, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {source}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Star, MessageSquare, BarChart3 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Feedback Collector</h1>
          <div className="flex gap-2">
            {user ? (
              <Button onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
            ) : (
              <Button onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Feedback Collector</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collect valuable feedback from your customers and gain insights to improve your products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Easy Feedback Collection</CardTitle>
              <CardDescription>
                Simple form for customers to share their thoughts and experiences
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Rating System</CardTitle>
              <CardDescription>
                5-star rating system to quickly gauge customer satisfaction
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Dashboard Analytics</CardTitle>
              <CardDescription>
                View and analyze all feedback in a comprehensive dashboard
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <div className="space-x-4">
            <Button onClick={() => navigate('/feedback')} size="lg">
              Leave Feedback
            </Button>
            {!user && (
              <Button onClick={() => navigate('/auth')} variant="outline" size="lg">
                View Dashboard
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            No account required to leave feedback
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

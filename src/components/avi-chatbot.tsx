
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Bot, Send, Loader2, User, X } from 'lucide-react';
import { chatWithAvi } from '@/ai/flows/avi-flow';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function AviChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: '¡Hola! Soy Avi, tu asistente de compras. ¿En qué te puedo ayudar hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages;
      const response = await chatWithAvi({ history, message: userMessage.content });
      const modelMessage: Message = { role: 'model', content: response.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error chatting with Avi:', error);
      const errorMessage: Message = {
        role: 'model',
        content: 'Lo siento, estoy teniendo problemas para conectarme. Intenta de nuevo más tarde.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
        size="icon"
      >
        <Bot className="h-8 w-8" />
        <span className="sr-only">Abrir chat con Avi</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex flex-col p-0 w-full max-w-md">
          <SheetHeader className="p-4 border-b">
            <div className="flex justify-between items-center">
                 <div className='flex items-center gap-3'>
                    <Avatar>
                        <div className="bg-primary rounded-full p-2">
                             <Bot className="h-6 w-6 text-primary-foreground" />
                        </div>
                    </Avatar>
                    <div>
                        <SheetTitle>Asistente Avi</SheetTitle>
                        <SheetDescription>Tu asistente de compras personal</SheetDescription>
                    </div>
                </div>
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                 </Button>
            </div>
          </SheetHeader>
          
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
             <div className="p-4 space-y-6">
                {messages.map((msg, index) => (
                    <div
                    key={index}
                    className={cn(
                        'flex items-start gap-3',
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                    >
                    {msg.role === 'model' && (
                        <Avatar className="h-8 w-8 border">
                            <div className="bg-primary rounded-full p-1.5 flex items-center justify-center h-full w-full">
                                <Bot className="h-5 w-5 text-primary-foreground" />
                            </div>
                        </Avatar>
                    )}
                    <div
                        className={cn(
                        'max-w-[80%] rounded-lg px-4 py-2 text-sm',
                        msg.role === 'user'
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted'
                        )}
                    >
                        {msg.content}
                    </div>
                     {msg.role === 'user' && (
                         <Avatar className="h-8 w-8 border">
                            <AvatarImage src={user?.photoURL || undefined} />
                            <AvatarFallback>
                                <User className="h-4 w-4" />
                            </AvatarFallback>
                        </Avatar>
                     )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                         <Avatar className="h-8 w-8 border">
                            <div className="bg-primary rounded-full p-1.5 flex items-center justify-center h-full w-full">
                                <Bot className="h-5 w-5 text-primary-foreground" />
                            </div>
                        </Avatar>
                        <div className="bg-muted rounded-lg px-4 py-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                )}
            </div>
          </ScrollArea>

          <SheetFooter className="p-4 border-t bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex w-full items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregúntale algo a Avi..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

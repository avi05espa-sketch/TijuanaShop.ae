
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFirebase, useUser } from '@/firebase';
import { getChatsForUser } from '@/lib/data';
import type { Chat } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, MessageSquareText } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

function ChatListItem({ chat, currentUserId }: { chat: Chat; currentUserId: string }) {
    const otherUserId = chat.participants.find(p => p !== currentUserId);
    if (!otherUserId || !chat.participantDetails) return null;

    const otherUserDetails = chat.participantDetails[otherUserId];
    const lastMessageTimestamp = chat.lastMessage?.timestamp?.toDate();

    return (
        <Link href={`/chat/${chat.id}`} className="block hover:bg-muted/50 rounded-lg">
            <div className="flex items-center gap-4 p-4">
                <Avatar className="h-14 w-14 border">
                    <AvatarImage src={otherUserDetails?.avatar} alt={otherUserDetails?.name} />
                    <AvatarFallback>{otherUserDetails?.name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-start">
                        <p className="font-bold truncate">{otherUserDetails?.name}</p>
                        {lastMessageTimestamp && (
                            <p className="text-xs text-muted-foreground whitespace-nowrap">
                                {formatDistanceToNow(lastMessageTimestamp, { addSuffix: true, locale: es })}
                            </p>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.productTitle}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{chat.lastMessage?.text}</p>
                </div>
            </div>
        </Link>
    );
}


export default function MessagesPage() {
    const { firestore } = useFirebase();
    const { user, loading: userLoading } = useUser();
    const router = useRouter();
    
    const [chats, setChats] = useState<Chat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userLoading) return;
        if (!user) {
            router.replace('/auth');
            return;
        }

        const fetchChats = async () => {
            if (firestore && user) {
                const userChats = await getChatsForUser(firestore, user.uid);
                setChats(userChats);
                setLoading(false);
            }
        };

        fetchChats();

    }, [user, userLoading, firestore, router]);

    return (
         <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
             <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Button variant="outline" asChild>
                        <Link href="/">← Volver</Link>
                    </Button>
                    <h1 className="text-xl font-bold font-headline">Mensajes</h1>
                    <div className="w-24"></div>
                </div>
            </header>
            <main className="container mx-auto max-w-4xl px-0 py-8 md:py-12 md:px-4">
                <Card>
                    <CardContent className="p-0">
                         {loading || userLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            </div>
                        ) : chats.length > 0 ? (
                            <div className="divide-y">
                                {chats.map(chat => (
                                    user && <ChatListItem key={chat.id} chat={chat} currentUserId={user.uid} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-96 text-center p-6">
                                <MessageSquareText className="h-16 w-16 text-muted-foreground/50" />
                                <h2 className="mt-6 text-xl font-semibold">No tienes mensajes</h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Cuando inicies una conversación con un vendedor, aparecerá aquí.
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
         </div>
    )
}

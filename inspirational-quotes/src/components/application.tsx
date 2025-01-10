import { useState } from 'react';
import Loading from './loading';
import InspirationalQuote from './quote';
import Quotes from './quotes';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  if (!quotes) return <Loading />;

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        <div className="grid grid-cols-2 gap-4"></div>
        {quotes.map((quote) => {
          return (
            <InspirationalQuote
              key={quote.id}
              content={quote.content}
              source={quote.source}
            />
          );
        })}
      </Quotes>
    </main>
  );
};

export default Application;

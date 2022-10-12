import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { toast } from 'react-hot-toast';
import { isAlias, isUrl } from '@/utils/validate';

export function LinkShortenerForm() {
  const [link, setLink] = useState('');
  const [alias, setAlias] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  function reset() {
    setLink('');
    setAlias('');
    setShortenedLink('');
    setLoading(false);
  }

  function copyLink() {
    window.navigator.clipboard.writeText(shortenedLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!link) return toast.error('Link is required.');
    if (!isUrl(link)) return toast.error('Link is invalid.');
    if (alias && !isAlias(alias)) return toast.error('Alias is invalid.');

    setLoading(true);

    let params: { url: string; alias?: string } = { url: link };
    if (alias) params['alias'] = alias;

    const response = await fetch(
      `/api/shorten?${new URLSearchParams(params)}`,
      {
        method: 'POST',
      }
    );

    const data = await response.json();
    setLoading(false);

    if ('message' in data) return toast.error(data.message);

    setShortenedLink(`${window.location.hostname}/${data.code}`);
    setAlias('');
    toast.success('Link created.');
  }

  return (
    <div className="w-full">
      {shortenedLink ? (
        <div className="flex items-center gap-2">
          <div className="relative w-full">
            <Input
              type="text"
              aria-label="Shortened link"
              placeholder="Shortened link"
              readOnly
              value={shortenedLink}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button
                onClick={copyLink}
                className="px-2 py-1 bg-slate-300 text-blue-700 text-xs rounded font-bold uppercase hover:opacity-90 active:opacity-80 transition ease-in-out"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <Button onClick={reset}>Another</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              aria-label="Shorten your link"
              placeholder="Shorten your link"
              value={link}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setLink(event.target.value);
              }}
            />
            <Button type="submit" disabled={loading}>
              Shorten
            </Button>
          </div>
          <Input
            type="text"
            aria-label="Optional custom alias"
            placeholder="Custom alias (Optional)"
            value={alias}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setAlias(event.target.value);
            }}
          />
        </form>
      )}
    </div>
  );
}

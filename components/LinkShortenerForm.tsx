import { Button } from './Button';
import { Input } from './Input';

export function LinkShortenerForm() {
  return (
    <form className="w-full space-y-2">
      <div className="flex items-center gap-2 w-full">
        <Input
          type="url"
          aria-label="Shorten your link"
          placeholder="Shorten your link"
        />
        <Button>Shorten</Button>
      </div>
      <Input
        type="text"
        aria-label="Optional custom alias"
        placeholder="Custom alias (Optional)"
      />
    </form>
  );
}

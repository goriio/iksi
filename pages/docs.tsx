import Link from 'next/link';

export default function Docs() {
  return (
    <article className="prose prose-invert mx-auto p-4">
      <h1>API Documentation</h1>
      <h2>API Base</h2>
      <pre>https://iksi.ml/api</pre>
      <h2>Shortening a link</h2>
      <pre>/shorten</pre>
      <p>Requires a `url` parameter.</p>
      <h3>Example</h3>
      <pre>
        POST:
        https://iksi.ml/api/shorten?url=example.of/a/looooooooooooong/link.html
      </pre>
      <h3>Response</h3>
      <pre>
        {`{
    "code": "50zGrFpmnt1",
    "link": "example.of/a/looooooooooooong/link.html"
}`}
      </pre>
      <footer className="text-right">
        Go back to <Link href="/">home page</Link>
      </footer>
    </article>
  );
}

import { prisma } from '@/lib/prisma';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

export default function Redirect() {
  return (
    <p>
      There is no link with that code.
      <br />
      Try to{' '}
      <Link href="/">
        <a className="text-blue-500 hover:underline">shorten a link</a>
      </Link>
      , instead.
    </p>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const url = await prisma.url.findUnique({
    where: {
      code: params?.code as string,
    },
  });

  if (url) {
    return {
      redirect: {
        destination: new RegExp('^https?://', 'i').test(url.link)
          ? url.link
          : 'http://' + url.link,
      },
    };
  }

  return {
    props: {},
  };
}

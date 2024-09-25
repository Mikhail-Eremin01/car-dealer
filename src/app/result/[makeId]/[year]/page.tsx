import { Metadata } from 'next';
import { getModelsForMakeIdYear } from '@/utils/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import ResultPageClient from './ResultPageClient';

export const metadata: Metadata = {
  title: 'Результаты',
};

export async function generateStaticParams() {
  return [
    { makeId: '1', year: '2022' },
    { makeId: '2', year: '2021' },
  ];
}

const ResultPage = async ({ params }: { params: { makeId: string; year: string } }) => {
  const { makeId, year } = params;
  const models = await getModelsForMakeIdYear(makeId, year);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      	<div className="sticky top-0 z-10 pt-4">
	  		<div className="">
				<Link href="/" passHref>
					<button className="px-4 py-2 text-white bg-blue-500 rounded">
						Back to the main page
					</button>
				</Link>
			</div>
		</div>
		<Suspense fallback={<div>Uploading models...</div>}>
			<ResultPageClient models={models} />
		</Suspense>
    </div>
  );
}

export default ResultPage;

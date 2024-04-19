import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { powerBI } from '../../public';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Airbnb Price Optimization</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Airbnb Price Optimization
          </h1>
          <p className="mt-1 text-base text-[#140D20]">
            Conducted by <span className="font-semibold">Ahmed Amine Hlel</span>{' '}
            , Supervised by{' '}
            <span className="font-semibold">Yasmine CHAABANI</span>
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-justify">
                <h2 className="text-xl leading-6 font-medium text-gray-900">
                  Introduction to the BI Case Study
                </h2>
                <p className="mt-1 text-sm text-[#140D20]">
                  This case study explores the use of Business Intelligence in
                  optimizing Airbnb pricing strategies. We analyze historical
                  data, market trends, and competitor pricing to develop a
                  comprehensive BI model.
                </p>
                <p className="mt-2 text-sm text-[#140D20]">
                  Key elements include defining the problem, collecting and
                  processing data, analyzing through various KPIs such as
                  average nightly price, occupancy rates, and seasonal demand,
                  and visualizing data for actionable insights.
                </p>
                <div className="mt-4">
                  <Link href="/dashboard">
                    <div className="btn btn-neutral inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white">
                      Explore Dashboard
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-4 justify-between">
              <Image
                alt={'BI main image'}
                src={powerBI}
                className="object-cover w-3/4 h-[30rem] rounded-[1rem]"
              />

              <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white text-lg px-6 py-4 border-b border-gray-300 text-center">
                  What is BI?
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base text-justify">
                    Business Intelligence (BI) involves the strategies and
                    technologies used by enterprises for data analysis of
                    business information. BI provides historical, current, and
                    predictive views of business operations, often using data
                    gathered into a data warehouse or a data mart and
                    occasionally working from operational data. Applications in
                    BI transform data into actionable intelligence which
                    supports decision-making processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#140D20] text-center">
            © 2024 Ahmed Amine Hlel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import SearchBar from "../components/list/search-bar";
import { MovieResponseType } from "../lib/utils/movie-type";
import MovieApi from "../lib/api/movie";
import { getSmallPoster } from "../lib/utils/get-query";
import LoadingSpinner from "../components/common/loading-spinner";
import Head from "next/head";
import NoMovie from "../components/list/no-movies";
import IndicatorContent from "../components/detail/indicator-content";
import { PrimaryIcon } from "../components/common/primary-icon";
import { CgSandClock } from "react-icons/cg";
import { CalculateOverall, GetPercentage } from '../lib/utils/calculate-score';


const MovieList: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieResponse, setMovieResponse] = useState<MovieResponseType>();

  useEffect(() => {
    MovieApi.all(0, 100).then((response) => {
      setMovieResponse(response);
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
    });

  }, []);

  return (
    <div className=" max-w-4xl mx-auto ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="mx-4 mt-4 md:mt-8 ">

          <Head>
            <title>قائمة الأفلام | الآن تعرف</title>
            <meta name="description" content="الآن تعرف - اكتشف ما إذا كان الفيلم مناسبًا للأطفال." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="قائمة الأفلام | الآن تعرف" />
            <meta property="og:description" content="الآن تعرف - اكتشف ما إذا كان الفيلم مناسبًا للأطفال." />
            <meta property="og:image" content="https://images.unsplash.com/photo-1595425178239-7f2e3af36041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <meta property="og:image:alt" content="شعار الآن تعرف" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nowyouknow.ae/" />
            <meta property="og:locale" content="ar_AE" />
            <meta property="og:site_name" content="الآن تعرف" />
            <meta property="whatsapp:site" content="NowYouKnow" />
            <meta property="whatsapp:title" content="قائمة الأفلام | الآن تعرف" />
            <meta property="whatsapp:description" content="الآن تعرف - اكتشف ما إذا كان الفيلم مناسبًا للأطفال." />
            <meta property="whatsapp:image" content="https://images.unsplash.com/photo-1595425178239-7f2e3af36041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <meta property="telegram:site" content="@nowyouknow" />
            <meta property="telegram:title" content="قائمة الأفلام | الآن تعرف" />
            <meta property="telegram:description" content="الآن تعرف - اكتشف ما إذا كان الفيلم مناسبًا للأطفال." />
            <meta property="telegram:image" content="https://images.unsplash.com/photo-1595425178239-7f2e3af36041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          </Head>



          <p className="text-white text-3xl md:text-5xl font-bold">NowYouKnow</p>

          <div className="mt-4 md:mt-8">
            <SearchBar setMovieResponse={setMovieResponse} />
          </div>

          {movieResponse?.data.data.length ? (
            <>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-5 md:mt-8 h-48 ">
                {movieResponse?.data.data.map((movie) => (
                  <div key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>
                      <div className="h-48 md:h-64">
                        <img
                          src={"https://assets.voxcinemas.com/posters/P_HO00011185.jpg"}
                          alt="alt"
                          className="object-cover h-full w-full rounded-lg"
                        />
                      </div>

                      <div className="w-full my-auto mt-1">
                        <div className="w-full bg-slate-600 rounded h-1.5 dark:bg-gray-700">
                          <div
                            className="bg-teal-500 rounded h-1.5"
                            style={{ width: `${GetPercentage(CalculateOverall(movie))}%` }}
                          ></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                <div dir="rtl" className=" text-center col-start-1 col-end-4 md:col-end-5 py-6 bg-slate-800 rounded px-4 mb-4 mt-2">

                  <IndicatorContent
                    title="وصلت إلى نهاية القائمة"
                    icon={
                      <div className=' flex justify-center '>
                        <PrimaryIcon>
                          <CgSandClock />
                        </PrimaryIcon>
                      </div>
                    }
                  >
                    عد قريبًا للاطلاع على المزيد من المحتوى
                  </IndicatorContent>
                </div>

              </div>


            </>
          ) : (
            <div className=" text-center justify-center">

              <NoMovie />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;

import { type NextPage } from "next";
import Footer from "~/components/Footer";
import StatOneLiner from "~/components/StatOneLiner";
import Progress from "~/components/Progress";


const Home: NextPage = () => {
  return (
    <>
      <h1 className="fixed bg-emerald-300 pl-12 text-[5rem] font-semibold -tracking-[.1em] text-white sm:text-[5rem]">
        Jim It!
      </h1>
      <main className="flex min-h-screen flex-col gap-12 bg-emerald-300 font-raleway">
        <a
          href="https://icons8.com/"
          className="absolute right-1 text-sm italic text-white"
        >
          Icons provided by Icons8
        </a>
        <div className="mx-auto my-[25%] flex w-4/5 grow flex-col items-center justify-start gap-8">
          <div className="container flex-col justify-start bg-white">
            <StatOneLiner
              title={"Last workout"}
              data={"19/05/2023"}
              upDown={""}
            />
            <hr className="border-emerald-400" />
            <StatOneLiner
              title={"Workouts this month"}
              data={"8"}
              upDown={"down"}
            />
          </div>
          <div className="flex w-full grow justify-between gap-4">
            <div className="container p-2">
              <div className="h-[95%] overflow-y-auto">
                <Progress />
              </div>
              <p className="text-sm font-normal italic text-white">
                All figures measured in kilograms (kg).
              </p>
            </div>
            <div className="container w-1/3 p-2">
              <h2>ORM</h2>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

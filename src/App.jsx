//import
import React, { useState } from "react";
import "./App.css";
import profile_picture from "./assets/images/image-jeremy.png";
import workImage from "./assets/images/icon-work.svg";
import playImage from "./assets/images/icon-play.svg";
import StudyImage from "./assets/images/icon-study.svg";
import ExerciseImage from "./assets/images/icon-exercise.svg";
import SocialImage from "./assets/images/icon-social.svg";
import Self_careImage from "./assets/images/icon-self-care.svg";
/* import DisplayData from "./DisplayData.jsx"; */
import data from "./assets/data.json";
//data selectors
const Work = data[0].timeframes;
const Play = data[1].timeframes;
const Study = data[2].timeframes;
const Exercise = data[3].timeframes;
const Social = data[4].timeframes;
const Self_Care = data[5].timeframes;
function App() {
  const [state, setState] = useState({
    //btn style
    dailyBtnStyle:
      "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
    WeeklyBtnStyle: "font-normal  cursor-pointer hover:text-white ",
    MonthlyBtnStyle:
      "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
    //common
    time_interval: "weak",
    //work
    Work_currentTime: Work.weekly.current,
    work_previousTime: Work.weekly.previous,
    //play
    play_currentTime: Play.weekly.current,
    play_previousTime: Play.weekly.previous,
    //study
    study_currentTime: Study.weekly.current,
    study_previousTime: Study.weekly.previous,
    //Exercise
    Exercise_currentTime: Exercise.weekly.current,
    Exercise_previousTime: Exercise.weekly.previous,
    //Social
    Social_currentTime: Social.weekly.current,
    Social_previousTime: Social.weekly.previous,
    //Self Care
    SelfCare_currentTime: Self_Care.weekly.current,
    SelfCare_previousTime: Self_Care.weekly.previous,
  });
  //jsx components
  function ProfileCard() {
    function DailyBtn() {
      setState({
        //btn style
        dailyBtnStyle: "font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle:
          "font-normal  cursor-pointer hover:text-white text-Desaturated_blue",
        MonthlyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "Day",
        //work
        Work_currentTime: Work.daily.current,
        work_previousTime: Work.daily.previous,
        //play
        play_currentTime: Play.daily.current,
        play_previousTime: Play.daily.previous,
        //study
        study_currentTime: Study.daily.current,
        study_previousTime: Study.daily.previous,
        //Exercise
        Exercise_currentTime: Exercise.daily.current,
        Exercise_previousTime: Exercise.daily.previous,
        //Social
        Social_currentTime: Social.daily.current,
        Social_previousTime: Social.daily.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.daily.current,
        SelfCare_previousTime: Self_Care.daily.previous,
      });
    }
    function WeeklyBtn() {
      setState({
        //btn style
        dailyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle: "font-normal  cursor-pointer hover:text-white ",
        MonthlyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "weak",
        //work
        Work_currentTime: Work.weekly.current,
        work_previousTime: Work.weekly.previous,
        //play
        play_currentTime: Play.weekly.current,
        play_previousTime: Play.weekly.previous,
        //study
        study_currentTime: Study.weekly.current,
        study_previousTime: Study.weekly.previous,
        //Exercise
        Exercise_currentTime: Exercise.weekly.current,
        Exercise_previousTime: Exercise.weekly.previous,
        //Social
        Social_currentTime: Social.weekly.current,
        Social_previousTime: Social.weekly.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.weekly.current,
        SelfCare_previousTime: Self_Care.weekly.previous,
      });
    }
    function MonthlyBtn() {
      setState({
        //btn style
        dailyBtnStyle:
          "text-Desaturated_blue font-normal cursor-pointer hover:text-white",
        WeeklyBtnStyle:
          "text-Desaturated_blue font-normal  cursor-pointer hover:text-white ",
        MonthlyBtnStyle: " font-normal cursor-pointer hover:text-white",
        //common
        time_interval: "Month",
        //work
        Work_currentTime: Work.monthly.current,
        work_previousTime: Work.monthly.previous,
        //play
        play_currentTime: Play.monthly.current,
        play_previousTime: Play.monthly.previous,
        //study
        study_currentTime: Study.monthly.current,
        study_previousTime: Study.monthly.previous,
        //Exercise
        Exercise_currentTime: Exercise.monthly.current,
        Exercise_previousTime: Exercise.monthly.previous,
        //Social
        Social_currentTime: Social.monthly.current,
        Social_previousTime: Social.monthly.previous,
        //Self Care
        SelfCare_currentTime: Self_Care.monthly.current,
        SelfCare_previousTime: Self_Care.monthly.previous,
      });
    }
    return (
      <section
        className="mt-[5.063rem] bg-Dark_blue rounded-[0.938rem] 
       xl:mt-[0rem] xl:row-span-2 md:row-span-1 md:col-span-2 xl:col-span-1 xl:max-w-[22.1rem] 2xl:max-w-none"
      >
        <section
          className="bg-Blue p-[2.563rem] pl-[1.875rem]
       rounded-[0.938rem] flex gap-x-[1.25rem] xl:flex-col items-center xl:p-0 
       xl:pl-[2rem] xl:pr-[5.063rem] xl:pt-[2.313rem] xl:pb-[5rem] xl:items-start"
        >
          <img
            src={profile_picture}
            alt="profile_picture"
            className="xl:border-[0.25rem] border-2 border-solid border-white rounded-full 
          w-[3rem] lx:self-start xl:mb-[2.688rem] md:w-[5.5rem]"
          />
          <div>
            <h3 className="text-Pale_Blue text-[0.938rem] font-normal ">
              Report for
            </h3>
            <h1
              className=" text-[1.5rem] font-light md:text-[2.5rem] 
            xl:leading-[3.75rem] xl:flex xl:flex-col"
            >
              Jeremy <span>Robson</span>
            </h1>
          </div>
        </section>
        <section
          className="flex p-[1.625rem] pb-[2rem] justify-between 
      xl:items-start  flex-wrap xl:flex-col  xl:gap-[1.313rem] "
        >
          <button className={state.dailyBtnStyle} onClick={DailyBtn}>
            Daily
          </button>
          <button className={state.WeeklyBtnStyle} onClick={WeeklyBtn}>
            Weekly
          </button>
          <button className={state.MonthlyBtnStyle} onClick={MonthlyBtn}>
            Monthly
          </button>
        </section>
      </section>
    );
  }

  function WorkCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem] ">
        <section
          className="flex justify-end items-center bg-Light_red_work
         rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden"
        >
          <img
            src={workImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[5.5rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Work</h2>
              <div className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </div>
            </div>
            <div
              className="flex items-center justify-between xl:flex-col 
            xl:items-start xl:justify-normal xl:mt-6 "
            >
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.Work_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.work_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function PlayCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="flex justify-end items-center bg-Soft_blue__play rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden">
          <img
            src={playImage}
            alt="workImage"
            className="mr-[1.063rem] mt-[0.938rem] w-[7rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Play</h2>
              <button className="rounded-full flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal  xl:mt-6">
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.play_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.play_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function StudyCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="flex justify-end items-center bg-Light_red__study rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden">
          <img
            src={StudyImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[6rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Study</h2>
              <div className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal  xl:mt-6">
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.study_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.study_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function ExerciseCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="flex justify-end items-center bg-Lime_green__exercise rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden">
          <img
            src={ExerciseImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[7.5rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Exercise</h2>
              <div className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal  xl:mt-6">
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.Exercise_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.Exercise_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function SocialCard() {
    return (
      <section className="grid max-h-[18.2rem] xl:w-[15.9rem]">
        <section className="flex justify-end items-center bg-Violet__social rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden">
          <img
            src={SocialImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[0.188rem] w-[5.7rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Social</h2>
              <div className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal  xl:mt-6">
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.Social_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.Social_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  function SelfCareCard() {
    return (
      <section className="grid mb-[5.6rem] md:mb-[0rem] xl:w-[15.9rem]">
        <section className="flex justify-end items-center bg-Soft_orange__self_care rounded-t-[0.938rem] z-[3] h-[5.38rem] overflow-hidden">
          <img
            src={Self_careImage}
            alt="workImage"
            className="mr-[1.094rem] mt-[-0.625rem] w-[6rem]"
          />
        </section>
        <section
          className="bg-Dark_blue rounded-[0.938rem] px-[1.5rem] 
      py-[1.75rem] mt-[-1.875rem] z-10 hover:bg-hover_color cursor-pointer"
        >
          <section className="flex justify-between flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">Self Care</h2>
              <div className="flex gap-1 cursor-pointer">
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
                <div className="w-2 h-2 bg-Pale_Blue rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between xl:flex-col xl:items-start xl:justify-normal  xl:mt-6">
              <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
                {state.SelfCare_currentTime}hrs
              </h3>
              <h5 className="text-Pale_Blue ">
                Last {state.time_interval} - {state.SelfCare_previousTime}hrs
              </h5>
            </div>
          </section>
        </section>
      </section>
    );
  }
  return (
    <article className="xl:flex xl:justify-center xl:items-center xl:h-screen">
      <main
        className="mr-6 ml-6 md:flex md:flex-col xl:flex-row xl:justify-center
       xl:items-center md:gap-5 xl:max-w-[90rem]"
      >
        <ProfileCard />
        <div
          className="md:grid md:grid-cols-2 md:grid-rows-4 md:gap-[1.87rem] 
        xl:grid-cols-3 xl:grid-rows-2 md:items-center "
        >
          <WorkCard />
          <PlayCard />
          <StudyCard />
          <ExerciseCard />
          <SocialCard />
          <SelfCareCard />
        </div>
      </main>
    </article>
  );
}

export default App;
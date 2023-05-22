import benchIcon from "src/assets/bench-press.png";
import deadliftIcon from "src/assets/deadlift.png";
import dumbellCurlIcon from "src/assets/dumbell-curl.png";
import inclinePressIcon from "src/assets/incline-press.png";
import pressUpsIcon from "src/assets/press-ups.png";
import pullUpsIcon from "src/assets/bench-press.png";
import sprintingIcon from "src/assets/sprinting.png";
import walkingIcon from "src/assets/walking.png";
import overheadPressIcon from "src/assets/overhead-press.png";
import genericIcon from "src/assets/generic-weight.png";

import ExerciseProgress from "./ExerciseProgress";

export default function Progress() {
  const progressStats = [
    {
      name: "bench-press",
      icon: benchIcon,
      initialWeight: 50,
      currentWeight: 60,
    },
    {
      name: "overhead-press",
      icon: overheadPressIcon,
      initialWeight: 30,
      currentWeight: 32.5,
    },
    {
      name: "squat",
      icon: genericIcon,
      initialWeight: 70,
      currentWeight: 85,
    },
  ];

  return (
    <>
      <h2>Progress</h2>
      {progressStats.map((exercise, index) => {
        return (
          <ExerciseProgress
            key={exercise.name + index}
            name={exercise.name}
            icon={exercise.icon}
            initialWeight={exercise.initialWeight}
            currentWeight={exercise.currentWeight}
          />
        );
      })}
    </>
  );
}

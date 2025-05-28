//challenge 1 props
export default function PracticeProps() {
  const hours = new Date().getHours()
  let timeOfDay
  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else if (hours >= 21) {
    timeOfDay = 'night'
  }


  return (
    <h1>
      Good {timeOfDay} Akbar
    </h1>

  );
};





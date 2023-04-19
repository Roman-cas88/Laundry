const currentDate = new Date()
const yestarday = new Date()
  yestarday.setDate(currentDate.getDate() - 1)
const day1 = new Date()
  day1.setDate(currentDate.getDate() + 1)
const day2 = new Date()
  day2.setDate(currentDate.getDate() + 2)
const day3 = new Date()
  day3.setDate(currentDate.getDate() + 3)
const day4 = new Date()
  day4.setDate(currentDate.getDate() + 4)
const day5 = new Date()
  day5.setDate(currentDate.getDate() + 5)
const day6 = new Date()
  day6.setDate(currentDate.getDate() + 6)

  const dateArray = [
    {day: yestarday},
    {day: currentDate},
    {day: day1},
    {day: day2},
    {day: day3},
    {day: day4},
    {day: day5},
    {day: day6},
]

  const timeArray = [
    '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ]

  export { dateArray, timeArray }
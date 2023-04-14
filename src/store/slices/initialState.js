const currentDate = new Date()

let yestarday = new Date()
  yestarday.setDate(currentDate.getDate() - 1)

let day1 = new Date()
  day1.setDate(currentDate.getDate() + 1)

let day2 = new Date()
  day2.setDate(currentDate.getDate() + 2)

let day3 = new Date()
  day3.setDate(currentDate.getDate() + 3)

let day4 = new Date()
  day4.setDate(currentDate.getDate() + 4)

let day5 = new Date()
  day5.setDate(currentDate.getDate() + 5)

let day6 = new Date()
  day6.setDate(currentDate.getDate() + 6)

let day7 = new Date()
  day7.setDate(currentDate.getDate() + 7)

export const initialSatate = [
    {
        day: yestarday,
        time: [],
    },
    {
        day: currentDate,
        time: [],
    },
    {
        day: day1,
        time: [],
    },
    {
        day: day2,
        time: [],
    },
    {
        day: day3,
        time: [],
    },
    {
        day: day4,
        time: [],
    },
    {
        day: day5,
        time: [],
    },
    {
        day: day6,
        time: [],
    },
    {
        day: day7,
        time: [],
    }
]



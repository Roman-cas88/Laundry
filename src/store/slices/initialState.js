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

    const times = [
      {id:'', time:6},
      {id:'', time:7},
      {id:'', time:8},
      {id:'', time:9},
      {id:'', time:10},
      {id:'', time:11},
      {id:'', time:12},
      {id:'', time:13},
      {id:'', time:14},
      {id:'', time:15},
      {id:'', time:16},
      {id:'', time:17},
      {id:'', time:18},
      {id:'', time:19},
      {id:'', time:20},
      {id:'', time:21},
      {id:'', time:22},
    ]

export const initialState = [
    {
        day: yestarday,
        time: times,
    },
    {
        day: currentDate,
        time: times,
    },
    {
        day: day1,
        time: times,
    },
    {
        day: day2,
        time: times,
    },
    {
        day: day3,
        time: times,
    },
    {
        day: day4,
        time: times,
    },
    {
        day: day5,
        time: times,
    },
    {
        day: day6,
        time: times,
    },
]



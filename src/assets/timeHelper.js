import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')

export default dayjs

export const countWorkingHour = ({ punchIn, punchOut, isHoliday }) => {
  if (isHoliday) {
    return ['假日', 'table-secondary']
  }
  if (punchIn && !punchOut) {
    return ['異常', 'table-warning']
  }
  const hours = dayjs(punchOut).diff(dayjs(punchIn), 'h')
  if (hours >= 8) {
    return ['出勤', 'table-success']
  }
  return ['缺勤', 'table-danger']
}

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')

export default dayjs

export const countWorkingHour = ({ punchIn, punchOut, isHoliday, leaveId }) => {
  if (isHoliday) {
    return ['假日', 'table-secondary']
  }
  if (leaveId) {
    return ['請假', 'table-info']
  }
  if (punchIn && !punchOut) {
    return ['下班未打卡', 'table-warning']
  }
  if (!punchIn && !punchOut) {
    return ['缺勤', 'table-danger']
  }
  const hours = dayjs(punchOut).diff(dayjs(punchIn), 'h')
  if (hours >= 8) {
    return ['出勤', 'table-success']
  }
  return ['缺勤(時數)', 'table-warning']
}

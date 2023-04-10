import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Taipei')
const dividedHour = Number(import.meta.env.VITE_APP_DIVIDED_HOUR ?? 5)
export default dayjs
export const getEndTime = function () {
  return dayjs
    .tz(dayjs())
    .add(24 - dividedHour, 'h')
    .startOf('day')
    .add(dividedHour, 'h')
}
export const countWorkingHour = ({ punchIn, punchOut, isHoliday, leaveId }) => {
  if (isHoliday) return ['假日', 'info', false]
  if (leaveId) return ['請假', 'success', false]
  if (punchIn && !punchOut) return ['下班未打卡', 'warning', true]
  if (!punchIn && !punchOut) return ['缺勤', 'danger', true]
  const hours = dayjs(punchOut).diff(dayjs(punchIn), 'h')
  if (hours >= 8) return ['出勤', 'primary', true]
  return ['缺勤(時數)', 'warning', true]
}

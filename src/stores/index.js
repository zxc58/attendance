import { useUserStore } from './user'
import { useLocationStore } from './location'
import { useAttendanceStore } from './attendance'
import { useTimeStore } from './time'
const store = {
  useAttendanceStore,
  useLocationStore,
  useTimeStore,
  useUserStore,
}
export default store

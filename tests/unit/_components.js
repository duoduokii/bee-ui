import BeeAlertBody from '../../lib/alert/_src/index.vue'
import BeeBreadcrumb from '../../lib/breadcrumb/_src/index.vue'
import BeeButton from '../../lib/button/_src/index.vue'
import BeeCheckbox from '../../lib/checkbox/_src/index.vue'
import BeeDialog from '../../lib/dialog/_src/index.vue'
import BeeEmpty from '../../lib/empty/_src/index.vue'
import BeeIcon from '../../lib/icon/_src/index.vue'
import BeeInput from '../../lib/input/_src/index.vue'
import BeeLoading from '../../lib/loading/_src/index.vue'
import BeeMessageBody from '../../lib/message/_src/index.vue'
import BeeNotifyBody from '../../lib/notification/_src/index.vue'
import BeePagination from '../../lib/pagination/_src/index.vue'
import BeePicker from '../../lib/picker/_src/index.vue'
import BeePopper from '../../lib/popper/_src/index.vue'
import BeeRadioGroup from '../../lib/radio/_src/radio-group.vue'
import BeeRadio from '../../lib/radio/_src/radio-item.vue'
import BeeScrollbar from '../../lib/scrollbar/_src/index.vue'
import BeeSelect from '../../lib/select/_src/index.vue'
import BeeSelectOptions from '../../lib/select/_src/select-options.vue'
import BeeStep from '../../lib/step/_src/index.vue'
import BeeSwitch from '../../lib/switch/_src/index.vue'
import BeeTab from '../../lib/tab/_src/index'
import BeeTabItem from '../../lib/tab/_src/tab-item.vue'
import BeeTable from '../../lib/table/_src/index.vue'
import BeeTableColumn from '../../lib/table/_src/table-column.vue'
import BeeToolTip from '../../lib/tooltip/_src/index.vue'

export { BeeAlertBody, BeeBreadcrumb, BeeButton, BeeCheckbox, BeeDialog, BeeEmpty, BeeIcon, BeeInput, BeeLoading, BeeMessageBody, BeeNotifyBody, BeePagination, BeePicker, BeePopper, BeeRadio, BeeRadioGroup, BeeScrollbar, BeeSelect, BeeSelectOptions, BeeStep, BeeSwitch, BeeTab, BeeTabItem, BeeTable, BeeTableColumn, BeeToolTip }

export const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

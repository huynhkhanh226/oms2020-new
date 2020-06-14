import { formatMessage } from "devextreme/localization";

export function getLang(key) {
  return formatMessage(key) ? formatMessage(key) :  key
}



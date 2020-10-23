import {Linking, Platform} from 'react-native';

// from https://stackoverflow.com/questions/36163903/react-native-linking-sms

// function openUrl(url: string): Promise<any> {
function openUrl(url) {
  return Linking.openURL(url);
}
export function openSmsUrl(phone, body) {
  return openUrl(`sms:${phone}${getSMSDivider()}body=${body}`);
}
function getSMSDivider() {
  return Platform.OS === 'ios' ? '&' : '?';
}

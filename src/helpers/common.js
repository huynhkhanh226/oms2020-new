/*!
 * @author Raymond <huynhkhanh@diginet.com.vn>
 * date 09/06/2019
 * description these information got from genaral setting, and get from api (W00f1000/form-data)
 */
import config from "config";
export function url() {
    //let baseUrl = (process && process.env && process.env.PUBLIC_URL) ? process.env.PUBLIC_URL : '/';
    //console.log(baseUrl);
    //console.log(process.env);
    //console.log(config);
    console.log(`${config.PUBLIC_URL}`);
    return `${config.PUBLIC_URL}`;
}




export function getLanguage() {
    let result = '84';
    if (localStorage.getItem('APP_LANGUAGE')) {
        var locale = localStorage.getItem('APP_LANGUAGE');
        switch (locale) {
            case 'vi':
                result = '84';
                break;
            case 'en':
                result = '01';
                break;
            case 'zh':
                result = '86'
                break;
            case 'ja':
                result = '81'
                break;
            default:
                result = '84'
                break;
        }
    }
    return result;
}
export function getLocale() {
    let result = 'vi';
    if (localStorage.getItem('APP_LANGUAGE')) {
        result =localStorage.getItem('APP_LANGUAGE');
    }
    return result;
}
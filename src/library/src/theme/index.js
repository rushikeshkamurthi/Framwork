import { DefaultTheme as rnpDefaultTheme } from "react-native-paper";
import deepmerge from "deepmerge";

const roundness = 16;
const textColor = '#222222';
const background = '#fdfdfd';

const baseAppPrimaryColor =  '#0054A6';

let getThemeFunc = () => {};

export const fontSizes = {

    xSmall:10,
    small:12,
    medium:14,
    regular:16,
    xregular:18,
    large:20,
    xLarge:26,
    xxLarge:30,
}

export const miscTheme = {
    headerLeftIconSize : 36,
}


const commonColor = {

    navDeleteColor: 'red',
    error: 'red',
    toastRed : 'red',
    toastGreen : 'green',
    toastOrange : '#ff5e00',
    white : 'white',
    black : 'black',
    stringPrimary: '#104b78',
    strongDisabled : 'rgba(0,0,0,0.6)',
    toggleButtonOff: '#ffffff',
    rowContent: '#434343',
    noteBackground: '#F3F3F3',
    iconColor: '#B6B6B6',
    versionText : '#989898',
    bottomNav : {
        selected : '#F1F1F1',
        unSelected : background
    },
    statusbarBlue: '#0054A6',
    text:textColor,
    placeHolder: textColor,
    primary : baseAppPrimaryColor,
    accent : '#1c1c1c',
    background:background,
    textInputBorder: '#969696',
    gripperColor: '#ccc',
    gripperHeaderBorderColor: '#eee',
    borerLineColor: '#E0E0E0',
    selectedBlueColor: '#1AACFF',
    textGrey: '#737373',
    textDarkGray: '999999',
    reverBlue: '#0054A6',
    secondaryBackground: '#0054A6',
    greyLight: '#787878',
}

const override = {
    roundness,
    colors: {
        ...commonColor,
    },
    font: fontSizes,
    miscTheme
};

export const DefaultTheme = deepmerge.all([rnpDefaultTheme,override]);

export const setGetTheme = func => {
    getThemeFunc = func;
}

export const getTheme = () => getThemeFunc()

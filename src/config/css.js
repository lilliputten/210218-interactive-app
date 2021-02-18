/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.24, 18:19
 */

// Theme...
const THEME = process.env.THEME;
const theme = require(process.env.THEME_FILE);

// Some reusable parameters...
const defaultFontSize = theme.defaultFontSize || 16;
const textColor = theme.textColor || '#444';

const defaultTransitionTime = 250;
const defaultAnimateTime = 500;

const errorColor = theme.errorColor || '#c33';
const warnColor = theme.warnColor || '#f73'; // '#f96'
const successColor = theme.successColor || '#593'; // '#ac9'
const infoColor = theme.infoColor || theme.primaryColor; // '#29a' // '#9bd'
const confirmColor = theme.confirmColor /* || theme.primaryColor || textColor */ || '#891'; // '#07f'
const selectColor = theme.selectColor || '#05b';

// module.exports = { // Common-used css variables...
const cssConfig = { // Common-used css variables...

  THEME: THEME,

  primaryColor: theme.primaryColor,
  primaryLightColor: theme.primaryLightColor,
  primaryDarkColor: theme.primaryDarkColor,
  primaryContrastColor: theme.primaryContrastColor,

  secondaryColor: theme.secondaryColor,
  secondaryLightColor: theme.secondaryLightColor,
  secondaryDarkColor: theme.secondaryDarkColor,
  secondaryContrastColor: theme.secondaryContrastColor,

  // Colors...

  // Colors for dialogs styles
  errorColor, // theme.errorColor || '#c33',
  warnColor, // theme.warnColor || '#f73', // '#f96',
  successColor, // theme.successColor || '#593', // '#ac9',
  infoColor, // theme.infoColor || '#29a', // '#9bd',
  confirmColor, // theme.confirmColor /* || theme.primaryColor || textColor */ || '#891', // '#07f',
  selectColor, // theme.selectColor || '#05b',

  specialContrastColor: '#fff', // Generic contrast for accenting colors

  textColor,
  defaultTextColor: textColor,

  // Neutral colors...

  neutralExtraDarkColor: '#666',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  neutralColor: '#ccc',
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralExtraLightColor: '#f0f0f0',

  // Theme colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  themeColors: { // Generic theming colors...

    // primary: theme.primaryColor,
    // secondary: theme.primaryColor,

    error: errorColor,
    warn: warnColor,
    success: successColor,
    info: infoColor,
    confirm: confirmColor,
    select: selectColor,

    // red: '#c33',
    // orange: '#f73',
    // green: '#593',
    // grassGreen: '#891',
    // Blue: '#05b',
    // lightBue: '#29a',

    maroon: '#800000',
    red: '#ff0000',
    purple: '#800080',
    fuchsia: '#ff00ff',
    green: '#008000',
    // lime: '#00ff00',
    olive: '#808000',
    // yellow: '#ffff00',
    navy: '#000080',
    blue: '#0000ff',
    teal: '#008080',
    // aqua: '#00ffff',
    orange: '#ffa500',

    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    cadetblue: '#5f9ea0',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',

  },

  // Fonts...

  defaultFont: theme.defaultFont || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  defaultFontSize,
  fontSize: defaultFontSize,
  fontSizeM: defaultFontSize,
  fontSizeSm: defaultFontSize - 2,
  fontSizeXs: defaultFontSize - 4,
  fontSizeLg: defaultFontSize + 2,
  fontSizeXl: defaultFontSize + 4,
  fontSizeXxl: defaultFontSize + 8,
  titleFontSize: defaultFontSize + 8,
  defaultLineHeight: 1.6,
  // defaultFontWeight: 400,
  defaultFontWeight: 'normal',
  // defaultFontWeight: 500,
  // defaultBemFontSize: defaultFontSize,

  // Breakpoints (from bootstrap)
  bk_xs: 0,
  bk_sm_pre: 575.98,
  bk_sm: 576,
  bk_md_pre: 767.98,
  bk_md: 768,
  bk_lg_pre: 991.98,
  bk_lg: 992,
  bk_xl_pre: 1199.98,
  bk_xl: 1200,

  // Median breakpoints (breakpoints between popular screen sizes
  bm_xs: 0,
  bm_sm_pre: 399.98,
  bm_sm: 400,
  bm_md_pre: 699.98,
  bm_md: 700,
  bm_lg_pre: 799.98,
  bm_lg: 800,
  bm_xl_pre: 1099.98,
  bm_xl: 1100,

  // Modal sizes...
  modalMinWidth: 300, // Minimal width for 'auto' mode
  modalWindowPadding: 20, // Windows padding
  modalSizes: { // Generic theming colors...
    xs: 200,
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1000,
    xxl: 1200,
  },

  // Spacings & paddings...

  innerPadding: 5,
  itemPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // Timeouts & delays...

  transitionTime: defaultTransitionTime, // ms
  animateTime: defaultAnimateTime, // ms

  // Modals parameters...

  modalAnimateTime: defaultAnimateTime,
  modalWindowAnimateTime: defaultTransitionTime,

  // NOTE 2021.01.12, 13:54 -- `absolute` required for modal windows, `fixed` required for popups -- ???
  modalContainerPosition: 'absolute',
  modalPortalPosition: 'absolute',
  // modalContainerPosition: 'fixed',
  // modalPortalPosition: 'fixed',

  // Parameters...

  // // Use global flex container & in page components scrolls
  // // NOTE: 2019.06.14, 13:14 -- Not used. Using `html.Clippable` dynamically creating selectors.
  // useGlobalClipping: true,

};

const formItemSpacing = 4;
const formItemHeight = 32; // px
const formItemBorderSize = 1; // px
const formItemInnerHeight = formItemHeight; // - formItemBorderSize * 2; // px -- if used css border

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing, // px
  formItemHeight, // px
  formItemBorderSize, // px
  formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemOuterGlow: 4, // px
  formItemGlowColor: cssConfig.primaryColor, // cssConfig.neutralColor,
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

  popupContentGap: 4,

});

module.exports = cssConfig;

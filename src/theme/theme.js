const colors = {
  light: {
    textDark: 'rgba(0,0,0,.87)',
    textMedium: 'rgba(0,0,0,.60)',
    textLight: 'rgba(0,0,0,.38)',
    textWhite: 'rgb(255,255,255)',
    background: 'rgb(240,242,245)',
    imageOverlayColor: 'rgb(18,18,18)',
    panel: 'rgb(250,250,250)',
    border: 'rgb(232,232,232)',
    primary: 'rgb(55, 77, 109)',
    primaryMedium: 'rgba(55, 77, 109,0.20)',
    primaryLight: 'rgb(55, 77, 109,0.05)',
    secondary: 'rgb(6, 191, 198)',
    secondaryMedium: 'rgba(6, 191, 198, 0.2)',
    secondaryLight: 'rgba(6, 191, 198, 0.05)',
    warning: 'rgb(255,183,3)',
    error: 'rgb(223,41,53)',
    success: 'rgb(95,173,65)',
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
    transparent: 'transparent',
    none: 'none',
  },
  dark: {
    textDark: 'rgba(255,255,255,.87)',
    textMedium: 'rgba(255,255,255,.60)',
    textLight: 'rgba(255,255,255,.38)',
    textWhite: 'rgb(255,255,255)',
    background: 'rgb(18,18,18)',
    imageOverlayColor: 'rgb(18,18,18)',
    panel: 'rgb(34,34,34)',
    border: 'rgba(255,255,255,0.09)',
    primary: 'rgb(146, 168, 200)',
    primaryMedium: 'rgba(146, 168, 200,0.20)',
    primaryLight: 'rgb(146, 168, 200,0.05)',
    secondary: 'rgb(7, 230, 237)',
    secondaryMedium: 'rgba(7, 230, 237, 0.2)',
    secondaryLight: 'rgba(7, 230, 237, 0.05)',
    warning: 'rgb(255, 204, 77)',
    error: 'rgb(232, 100, 108)',
    success: 'rgb(148, 206, 125)',
    boxShadow:
      'rgba(255, 255, 255, 0.1) 0px 1px 3px 0px, rgba(255, 255, 255, 0.06) 0px 1px 2px 0px',
    transparent: 'transparent',
    none: 'none',
  },
}

export const lightTheme = {
  textDark: colors.light.textDark,
  textMedium: colors.light.textMedium,
  textLight: colors.light.textLight,
  textWhite: colors.light.textWhite,
  background: colors.light.background,
  imageOverlayColor: colors.light.imageOverlayColor,
  panel: colors.light.panel,
  border: colors.light.border,
  primary: colors.light.primary,
  primaryMedium: colors.light.primaryMedium,
  primaryLight: colors.light.primaryLight,
  secondary: colors.light.secondary,
  secondaryMedium: colors.light.secondaryMedium,
  secondaryLight: colors.light.secondaryLight,
  warning: colors.light.warning,
  error: colors.light.error,
  success: colors.light.success,
  boxShadow: colors.light.boxShadow,
  buttons: {
    primary: {
      backgroundColor: colors.light.primary,
      textColor: colors.light.textWhite,
      border: colors.light.border,
      boxShadow: colors.light.boxShadow,
    },
    secondary: {
      backgroundColor: colors.light.secondary,
      textColor: colors.light.textWhite,
      border: colors.light.border,
      boxShadow: colors.light.boxShadow,
    },
    tertiary: {
      backgroundColor: colors.light.transparent,
      textColor: colors.light.primary,
      border: colors.light.transparent,
      boxShadow: colors.light.boxShadow,
    },
    ghost: {
      backgroundColor: colors.light.transparent,
      textColor: colors.light.primary,
      border: colors.light.primary,
      boxShadow: colors.light.boxShadow,
    },
  },
}

export const darkTheme = {
  textDark: colors.dark.textDark,
  textMedium: colors.dark.textMedium,
  textLight: colors.dark.textLight,
  textWhite: colors.dark.textWhite,
  background: colors.dark.background,
  imageOverlayColor: colors.dark.imageOverlayColor,
  panel: colors.dark.panel,
  border: colors.dark.border,
  primary: colors.dark.primary,
  primaryMedium: colors.dark.primaryMedium,
  primaryLight: colors.dark.primaryLight,
  secondary: colors.dark.secondary,
  secondaryMedium: colors.dark.secondaryMedium,
  secondaryLight: colors.dark.secondaryLight,
  warning: colors.dark.warning,
  error: colors.dark.error,
  success: colors.dark.success,
  boxShadow: colors.dark.boxShadow,
  buttons: {
    primary: {
      backgroundColor: colors.dark.primary,
      textColor: colors.dark.textWhite,
      border: colors.dark.border,
      boxShadow: colors.dark.boxShadow,
    },
    secondary: {
      backgroundColor: colors.dark.secondary,
      textColor: colors.dark.textWhite,
      border: colors.dark.border,
      boxShadow: colors.dark.boxShadow,
    },
    tertiary: {
      backgroundColor: colors.dark.transparent,
      textColor: colors.dark.primary,
      border: colors.dark.transparent,
      boxShadow: colors.dark.boxShadow,
    },
    ghost: {
      backgroundColor: colors.dark.transparent,
      textColor: colors.dark.primary,
      border: colors.dark.primary,
      boxShadow: colors.dark.boxShadow,
    },
  },
}

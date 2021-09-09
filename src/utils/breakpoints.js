const maxSize = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1279px',
}

export const breakpoints = {
  tablet: `(min-width: ${maxSize.mobile})`,
  laptop: `(min-width: ${maxSize.tablet})`,
  desktop: `(min-width: ${maxSize.laptop})`,
}

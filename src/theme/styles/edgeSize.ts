export const edgeSize = {
  auto: 'auto',
  none: '0px',
  hair: '0.0625rem', // 1px
  xxxsmall: '0.125rem', // 2px
  xxsmall: '0.25rem', // 4px
  xsmall: '0.5rem', // 8px
  small: '1rem', // 16px
  medium: '1.5rem', // 24px
  large: '2rem', // 32px
  xlarge: '2.5rem', // 40px
  xxlarge: '3rem', // 48px
  xxxlarge: '3.5rem', // 56px
};

export const edgeSizeSmall = {
  ...edgeSize,
  xxsmall: '0.1875rem', // 3px
  xsmall: '0.375rem', // 6px
  small: '0.75rem', // 12px
  medium: '1rem', // 16px
  large: '1.5rem', // 24px
  xlarge: '2rem', // 32px
  xxlarge: '2.5rem', // 40px
  xxxlarge: '3rem', // 48px
};

export const edgeSizeLarge = {
  ...edgeSize,
};

export default edgeSize;

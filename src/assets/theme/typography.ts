
// Font weights
export const fontWeights = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400
};

// Font sizes
export const fontSizes = {
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  regular: '16px',
  medium: '18px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '48px'
};

// Typography styles
const createTypography = (fontSize: string, fontWeight = fontWeights.regular) => `
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`;

export const typography = {
  bodyRegular: createTypography(fontSizes.regular),
  bodyMediumBold: createTypography(fontSizes.regular, fontWeights.medium),
  bodyBold: createTypography(fontSizes.regular, fontWeights.bold),
  bodySemiBold: createTypography(fontSizes.regular, fontWeights.semiBold),
  link: `
    ${createTypography(fontSizes.regular, fontWeights.semiBold)};
    text-decoration: underline;
    cursor: pointer;
  `,
  cardTitle: createTypography(fontSizes.regular, fontWeights.bold),
  cardDescription: createTypography(fontSizes.small, fontWeights.regular)
};
import type { ParseSVGAttributesInterface } from '../interface';

export const parseSVGServer = (
  svgString: string,
): ParseSVGAttributesInterface => {
  const fillMatch = svgString.match(/fill="([^"]*)"/);
  const innerHTMLMatch = svgString.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const strokeLinecapMatch = svgString.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = svgString.match(/stroke-linejoin="([^"]*)"/);
  const strokeMatch = svgString.match(/stroke="([^"]*)"/);
  const strokeWidthMatch = svgString.match(/stroke-width="([^"]*)"/);
  const viewBoxMatch = svgString.match(/viewBox="([^"]*)"/);

  return {
    fill: fillMatch?.[1] || 'none',
    innerHTML: innerHTMLMatch?.[1] || '',
    stroke: strokeMatch?.[1] || 'currentColor',
    strokeLinecap: strokeLinecapMatch?.[1] || 'round',
    strokeLinejoin: strokeLinejoinMatch?.[1] || 'round',
    strokeWidth: strokeWidthMatch?.[1] || '1',
    viewBox: viewBoxMatch?.[1] || '0 0 24 24',
  };
};

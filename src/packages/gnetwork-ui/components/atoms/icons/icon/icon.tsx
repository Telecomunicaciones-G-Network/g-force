import type { IconProps } from './icon.props';

import { ButtonIcon } from './components/button-icon/button-icon';
import { UnknownIcon } from './components/unknown-icon/unknown-icon';

import { iconDictionary } from './dictionaries/icon.dictionary';

import { parseSVGServer } from './utils/parse-svg-server.util';
import { processIconClassNames } from './utils/process-icon-classnames.util';

export const Icon = ({
  className = '',
  color = 'currentColor',
  name,
  onClick,
  size = 24,
}: Readonly<IconProps>) => {
  const svgString = iconDictionary[name];
  const svgData = svgString ? parseSVGServer(svgString) : null;
  const classes = processIconClassNames(className, name);

  if (!svgData) {
    return (
      <div className={classes} style={{ width: size, height: size, color }}>
        <UnknownIcon />
      </div>
    );
  }

  const svgElement = (
    <svg
      aria-hidden="true"
      fill={svgData.fill}
      height={size}
      stroke={svgData.stroke}
      strokeLinecap={svgData.strokeLinecap as 'round' | 'butt' | 'square'}
      strokeLinejoin={svgData.strokeLinejoin as 'round' | 'miter' | 'bevel'}
      strokeWidth={svgData.strokeWidth}
      style={{ color }}
      viewBox={svgData.viewBox}
      width={size}
    >
      <g dangerouslySetInnerHTML={{ __html: svgData.innerHTML }} />
    </svg>
  );

  if (onClick) {
    return (
      <ButtonIcon className={className} onClick={onClick} size={size}>
        {svgElement}
      </ButtonIcon>
    );
  }

  return (
    <div className={classes} style={{ width: size, height: size, color }}>
      {svgElement}
    </div>
  );
};

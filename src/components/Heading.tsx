import React, { useContext } from 'react';
import { Heading as HeadingGrommet, HeadingProps as HeadingGrommetProps, ResponsiveContext } from 'grommet';

interface HeadingProps extends HeadingGrommetProps {
  htmlFor?: string;
}

const Heading: React.FunctionComponent<HeadingProps> = ({ htmlFor, ...props }: HeadingProps) => {
  const size = useContext(ResponsiveContext);

  return (
    <label htmlFor={htmlFor}>
      <HeadingGrommet {...props} size={size} responsive={false} />
    </label>
  );
};

export default Heading;

import * as React from "react";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  icon: any;
}

const Icon = ({ icon, dangerouslySetInnerHTML: _foo, ...rest }: IProps) => {
  return <div dangerouslySetInnerHTML={{ __html: icon }} {...rest} />;
};

export default Icon;

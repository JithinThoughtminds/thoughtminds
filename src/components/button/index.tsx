import React from "react";
import { Button} from 'antd';

interface Props {
  children?: React.ReactNode;
  onClick?: any;
  variant?: string,
  size?: string, 
  disabled?: boolean;
  icon?: string;
  type?:any;
}

const ButtonDefault: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  icon = '',
  type = 'submit',
  disabled,
  ...rest
}) => {
  
  return (
    <Button
      className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled} 
      type = {type}
      icon={icon}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
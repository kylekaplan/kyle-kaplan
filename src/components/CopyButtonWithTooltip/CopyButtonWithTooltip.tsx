import React, { useState } from "react";
import { Button, Tooltip, ButtonProps } from "@chakra-ui/react";

interface CopyTooltipProps {
  copyText: string;
  buttonProps?: ButtonProps;
}
const CopyButtonWithTooltip = ({ copyText, buttonProps }: CopyTooltipProps) => {
  const [tooltipTitle, setTooltipTitle] = useState('Copy');

  const onCopy = (event: any) => {
    event.stopPropagation();
    navigator.clipboard.writeText(copyText);
    setTooltipTitle('Copied!');
    setTimeout(() => {
      setTooltipTitle('Copy');
    }, 5000);
  };
  return (
    <Tooltip label={tooltipTitle} placement="top" closeOnClick={false}>
      <Button {...buttonProps} onClick={onCopy}> 
        kylekaplan50@gmail.com
      </Button>
    </Tooltip>
  );
};

export default CopyButtonWithTooltip;

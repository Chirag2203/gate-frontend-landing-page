import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GeneralTooltip = ({
  Icon,
  text,
  onClick,
    size,
}: {
  Icon: React.FC;
  text: string;
  onClick?: () => void;
  size?: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick} className={`cursor-pointer ${size? `text-${size}`:"text-lg"}`}>
          <Icon />
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GeneralTooltip;

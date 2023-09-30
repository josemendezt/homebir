import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'

const TooltipWrapper = ({ children, message }: { children: React.ReactNode; message: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={250}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="font-medium">{message}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipWrapper

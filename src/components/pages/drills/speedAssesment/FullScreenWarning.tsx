import { Button } from "@/components/ui/button";

const FullScreenWarning = ({
  handleReEnterFullscreen,
  handleEndTest,
}: {
  handleReEnterFullscreen: () => void;
  handleEndTest: () => void;
}) => {
  return (
    <div className="fullscreen-warning-overlay flex flex-col items-center gap-4 p-8">
      <p className="text-xl font-semibold">
        The test requires fullscreen mode to continue.
      </p>
      <div className="flex gap-4">
        <Button onClick={handleReEnterFullscreen}>Re-enter Fullscreen</Button>
        <Button onClick={handleEndTest}>Exit Test</Button>
      </div>
    </div>
  );
};

export default FullScreenWarning;

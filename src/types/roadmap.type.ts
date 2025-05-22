export type Roadmap = {
  name: string;
  icon: React.JSX.Element;
  goals: {
    name: string;
    isFinished: boolean;
    startedAt: string;
    finishedAt: string;
  }[];
};
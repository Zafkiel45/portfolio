// Every types related to standout texts. This includes everything with "standout"
// prefixe in files. 

export type StandoutText = {
  title: string;
  isCentralized: boolean;
};

export type StandoutDescrition = {
  children: React.ReactNode | string; 
  isCentralized: boolean;
}
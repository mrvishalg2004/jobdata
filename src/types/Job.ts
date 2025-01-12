export interface Job {
  id: string;
  title: string;
  company: string;
  link: string;
  status: 'applied' | 'rejected' | 'selected';
  appliedDate: string;
}

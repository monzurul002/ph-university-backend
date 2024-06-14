export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemisterName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemisterCode = '01' | '02' | '03';
export type TAcademicSemister = {
  name: TAcademicSemisterName;
  year: string;
  code: TAcademicSemisterCode;
  startMonth: TMonths;
  endMonth: TMonths;
};

interface IDateFormating {
  CheckIn: string;
  CheckOut: string;
}

export const DateFormating = ({ CheckIn, CheckOut }: IDateFormating) => {
  const FormatingCheckingDate = CheckIn.split("/");
  const FormatingCheckOutDate = CheckOut.split("/");

  const CheckingMonth = FormatingCheckingDate[1];
  const CheckingDay = FormatingCheckingDate[0];
  const CheckingYear = FormatingCheckingDate[2];

  const CheckOutMonth = FormatingCheckOutDate[1];
  const CheckOutDay = FormatingCheckOutDate[0];
  const CheckOutYear = FormatingCheckOutDate[2];

  const CheckInDate: any = `${CheckingMonth}/${CheckingDay}/${CheckingYear}`;
  const CheckOutDate: any = `${CheckOutMonth}/${CheckOutDay}/${CheckOutYear}`;

  const diff: any = Math.abs(
    new Date(CheckOutDate).valueOf() - new Date(CheckInDate).valueOf()
  );
  const dayscount = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return dayscount;
};

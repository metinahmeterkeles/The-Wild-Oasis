import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1-
  const numBookings = bookings.length;

  //2
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //3
  const checkIns = confirmedStays.length;

  //4
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
        title="Bookings"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(sales)}
        title="Sales"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        value={checkIns}
        title="Check ins"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={Math.round(occupation * 100) + '%'}
        title="Occupancy rate"
      />
    </>
  );
}

export default Stats;

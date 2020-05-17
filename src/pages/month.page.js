import React from 'react';
import {
  useParams,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';
import moment from 'moment';
import Calendar from 'src/components/calendar';
import MonthGridConnected from 'src/components/month-grid';

const MonthPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { date } = useParams();

  const setHistory = (mDate, isToday) => {
    const newPath = isToday ? '/' : `/month/${moment(mDate).format('YYYY-MM')}`;
    return location.pathname === newPath ? history.replace(newPath) : history.push(newPath);
  };
  const mDate = date ? moment(date, 'YYYY-MM', true) : moment();
  if (!mDate.isValid()) {
    return (
      <Redirect to={{ pathname: '/' }} />
    );
  }

  return <Calendar GridCmp={MonthGridConnected} date={mDate} updateDate={setHistory} />;
};

export default MonthPage;

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
import LoadingBar from 'src/components/loading-bar';

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

  return (
    <>
      <LoadingBar />
      <Calendar
        GridCmp={MonthGridConnected}
        date={mDate}
        onUpdateDate={setHistory}
      />
    </>
  );
};

export default MonthPage;

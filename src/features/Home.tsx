import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppNavbar } from '../components/AppNavbar';
import { PurchaseModal } from '../components/PurchaseModal';
import {
  getPortfolio,
  getTotalAssets,
} from '../store/Actions/portfolioActions';
import { Alert } from 'reactstrap';
import { getCurrencies } from '../store/Actions/currencyActions';
import MyTabs from '../components/MyTabs';
import SearchingComponent from '../components/SearchingComponent';
import { useTranslation } from 'react-i18next';
import { RootState } from '../store/store';
import Mainpage from './Mainpage';

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const userName = useSelector((state: RootState) => state.auth.user.name);
  const lastUpdated = useSelector((state: RootState) => state.codes.date);
  const totalAssets = useSelector((state: RootState) => state.totalAssets);
  const error = useSelector((state: RootState) => state.codes.error);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  useEffect(() => {
    if (isLogin) {
      dispatch(getPortfolio());
      dispatch(getCurrencies());
      dispatch(getTotalAssets());
    }
  }, [userName]);

  return (
    <div className="home">
      {isLogin ? (
        <div>
          <AppNavbar />
          {error ? <Alert color="warning">{error}</Alert> : ''}

          <div className="d-flex justify-content-center align-items-center">
            <h2>
              {t('totalAssets')}:{totalAssets}$
            </h2>
          </div>

          <div className="w-50 mx-auto mt-5">
            <PurchaseModal selected={selectedCurrency} />
            <SearchingComponent
              selection={(q: any) => setSelectedCurrency(q)}
            />
          </div>
          <MyTabs />
          <div className="mt-5">
            <span style={{ color: 'red' }}>{t('lastUpdated')}: </span>
            <span className="pb-5">{lastUpdated}</span>
          </div>
        </div>
      ) : (
        <Mainpage />
      )}
    </div>
  );
}

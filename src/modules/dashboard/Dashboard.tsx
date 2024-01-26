import { useState } from 'react';

import { ChooseYourPlan }     from './choosePlan/ChooseYourPlan';
import { PeoplesResult }      from './peoplesResult/PeoplesResult';
import { UsersReviews }       from './usersReviews/UsersReviews';
import { WhatYouGet }         from './whatYouGet/WhatYouGet';
import { IRadioButtonOption } from '../../components/radioButton/RadioButton';

export const Dashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | IRadioButtonOption>(null);

  return (
    <>
      <ChooseYourPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <WhatYouGet />
      <PeoplesResult />
      <UsersReviews />
      <ChooseYourPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
    </>
  );
}

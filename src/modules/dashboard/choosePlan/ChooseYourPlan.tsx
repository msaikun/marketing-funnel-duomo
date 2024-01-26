import classNames    from 'classnames'
import { useRouter } from 'next/router'

import styles from './chooseYourPlan.module.scss';

import { Button }                           from '../../../components/button/Button'
import { IRadioButtonOption, ReadioButton } from '../../../components/radioButton/RadioButton'
import { Block }                            from '../../../components/block/Block'
import { appPlansOptionsByMonth }           from '../../../utils/mockData'
import { plusJakartaSans }                   from '../../../../styles/fonts'

interface IChoosePlanProps {
  selectedPlan    : null | IRadioButtonOption;
  setSelectedPlan : (plan: IRadioButtonOption) => void
}
export const ChooseYourPlan = ({ selectedPlan, setSelectedPlan }: IChoosePlanProps) => {
  const router = useRouter();

  const onGetPlanClick = () => {
    const query = selectedPlan && { planId: `${selectedPlan.id}` };
 
    if (query) {
      router.push({
        pathname: '/growth-plan', query });
    }
  };

  const onRadioButtonChange = (option: IRadioButtonOption) => {
    setSelectedPlan(option);
  };

  return (
    <Block title="Choose your plan">
      <div className={classNames(plusJakartaSans.className)}>
        <div>
          {appPlansOptionsByMonth.map((plan) => (
            <ReadioButton
              key            = {plan.id}
              value          = {plan}
              selectedOption = {selectedPlan}
              onChange       = {onRadioButtonChange}
            />
          ))}
        </div>
        
        <Button title="Get my plan" disabled={!selectedPlan} onClick={onGetPlanClick} />

        <div className={styles.description}>
          You are enrolling in a 3-monthly subscription to{' '}
          <a href="https://awesomeapp.com/subscription" className={styles.link}>https://awesomeapp.com/subscription</a>{' '}
          with the discount price $29.99. You agree that the plan you selected
          will automatically be extended at the full price for successive
          renewal periods and you will be charged $99.99 every 3 months until
          you cancel the subscription. Payments will be charged from the card
          you specified here. You can cancel your subscription by contacting our
          customer support team via email at support@awesomeapp.com Subscription
          Policy. The charge will appear on your bill as &quot;awesomeapp&quot;.
        </div>
      </div>
    </Block>
  )
}
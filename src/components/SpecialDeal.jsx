import InfoBlock from './InfoBlock';

import timeIcon from '../assets/icons/time.svg';

const SpecialDeal = () => {
    return (
        <InfoBlock className='specialDeal'>
            <span style={{display: 'flex', gap: '30px', alignItems: 'center'}}><img src={timeIcon} /><h4>Special Deal!</h4></span>
            <span>Register now to unlock exclusive offers and discounts</span>
            <span style={{display: 'flex', justifyContent: 'space-between'}}>Offer expires in: <b>0:59:59</b></span>
        </InfoBlock>
    );
};

export default SpecialDeal;
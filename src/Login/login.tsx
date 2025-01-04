import '../Styles/Login.css';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

type OTPProps = GetProps<typeof Input.OTP>;
const { Title } = Typography;

//Verify	
interface statusProps {
	name: string,
	color: string
}

const Login = () => {

   const navegation = useNavigate();

   const onChange: OTPProps['onChange'] = text => {
      setVerify(text);
   };

   const [verify, setVerify] = useState<string>('');
   const [status, setStatus] = useState<statusProps | null>();

   const handleChange = () => {
      const pass = localStorage.getItem('codeUser');
      if (pass == verify) {
         setStatus({ name: '*Loading...', color: 'blue' });
         navegation('/home');
      } else {
         setStatus({ name: '*The code is incorrect', color: '#B94A48' });
      }
   };

   const sharedProps: OTPProps = {
      onChange,
      value: verify
   };

   return (
      <div className="container-login">
         <div className="container-pass">
            <Title className='title-login' level={5}><span style={{ 'color': '#fff', 'fontSize': '22px' }}>
					Please enter your login code to verify your access</span></Title>
            {status ? <p style={{ 'color': status.color }} className='text-verify'>{status.name}</p> : null}
            <br />
            <Flex gap="large" align="flex-center" vertical>
               <Input.OTP mask="✱" {...sharedProps} />
               <Button onClick={handleChange} type="primary">Log In</Button>
               <Link to="/home/register"> <p className='text-login'>Create a new code</p></Link>

            </Flex>
         </div>
      </div>
   );
};

export default Login;

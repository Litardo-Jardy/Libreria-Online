import '../Styles/Login.css';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearList } from '../Features/Books/listSlice';
import useStorage from '../Features/Books/LocalStorage';

type OTPProps = GetProps<typeof Input.OTP>;
const { Title } = Typography;


interface statusProps {
	name: string,
	color: string
}

const SignUp = () => {

   const navegation = useNavigate();
   const dispatch = useDispatch();

   const onChange: OTPProps['onChange'] = text => {
      setVerify(text);
   };


   const [pass, setPass] = useState<string>('');
   const [verify, setVerify] = useState<string>('');
   const [status, setStatus] = useState<statusProps | null>({
      name: '*Keep in mind that create a new Ping will erase your previous data.',
      color: '#B94A48'
   });


   const handleChange = () => {
      if (pass != '') {
         if (pass == verify) {
            setStatus({ name: '*Loading...', color: 'blue' });
            localStorage.setItem('codeUser', pass);
            clearStorage();
            dispatch(clearList());
            navegation('/home');
         } else {
            setStatus({ name: '*The codes don\'t match', color: '#B94A48' });
         }
      } else {
         setPass(verify);
         setVerify('');
         setStatus({ name: '*Verify code', color: '#6A7D3B' });
      }
   };

   const sharedProps: OTPProps = {
      onChange,
      value: verify
   };

   const { clearStorage } = useStorage();

   const changeUrl = () => {
      navegation('/home/login');
   };

   return (
      <div className="container-login">
         <div className="container-pass">

            <Title className='title-login' level={5}><span style={{ 'color': '#fff', 'fontSize': '22px' }}>
					Create a security code to protect your account</span></Title>
            {status ? <p style={{ 'color': status.color }} className='text-verify'>{status.name}</p> : null}

            <br />

            <Flex gap="large" align="flex-center" vertical>
               <Input.OTP mask=" ✱ " {...sharedProps} />
               <Button onClick={handleChange} type="primary">Sing in</Button>
               <Link to="/home/login"> <p onClick={changeUrl} className='text-login'>Enter existing code</p></Link>
            </Flex>
         </div>
      </div>
   );
};
export default SignUp;

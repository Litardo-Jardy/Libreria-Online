import '../Styles/Login.css';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

type OTPProps = GetProps<typeof Input.OTP>;
const { Title } = Typography;

const Login = () => {

 //Input
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text)};

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value)};

  const sharedProps: OTPProps = {
    onChange,
    onInput};

 return(
   <div className="container-login">
      <div className="container-pass">
	  <Title className='title-login' level={5}><span style={{ "color": "#fff", "fontSize": "22px"}}>
	   Please enter your login code to verify your access</span></Title>
	  <br />
          <Flex gap="large" align="flex-center" vertical>
           <Input.OTP mask="✱" {...sharedProps} />
           <Button type="primary">Log In</Button>
	   <Link to="/register"> <p className='text-login'> Create a new code</p></Link> 

          </Flex>
      </div>
   </div>
)}

export default Login;

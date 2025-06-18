import Field from "@/components/Field";
import { Button } from "@/src";

const Login = ({}) => {
  return (
    <div className="">
      <Field
        className="mt-6"
        innerLabel="Email"
        placeholder="Enter email"
        type="email"
      />
      <Button className="mt-6 w-full">Login</Button>
    </div>
  );
};

export default Login;

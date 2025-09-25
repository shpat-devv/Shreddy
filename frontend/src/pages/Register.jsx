import AccessForm from "../components/AccessForm";

export default function Register() {   
  return (
    <div>
      <h1>Register Page</h1>
      <AccessForm route="api/user/register/" method="register" />
    </div>
  );
}


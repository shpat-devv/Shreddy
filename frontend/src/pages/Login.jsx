import AccessForm from "../components/AccessForm";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <AccessForm route="/api/token/ " method="login" />
    </div>
  );
}
 
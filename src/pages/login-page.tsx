import LoginForm from "@/features/auth/components/login-form";
import AuthLayout from "@/components/layouts/auth-layout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

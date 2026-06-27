import RegisterForm from "@/features/auth/components/register-form";
import AuthLayout from "@/components/layouts/auth-layout";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;

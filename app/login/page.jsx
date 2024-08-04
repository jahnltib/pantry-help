import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0'
      }}
    >
      <LoginForm />
    </div>
  );
}
import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSession } from './SessionProvider';
import './LoginPage.css';

interface LocationState {
  from?: {
    pathname: string;
  };
}


const LoginPage: React.FC = () => {
  const { login, status, isAuthenticated } = useSession();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const redirectPath = useMemo(() => state?.from?.pathname ?? '/people', [state]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectPath]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      await login({ email, password });
    } catch (loginError) {
      if (loginError instanceof Error) {
        setError(loginError.message);
      } else {
        setError('Unable to sign in. Please try again.');
      }
    }
  };


  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__card" role="dialog" aria-modal="true" aria-labelledby="login-title">
          <div className="login-page__brand">
            <img
              src="https://www.boabco.com.au/wp-content/uploads/2023/07/Boab-Co-Logo_Horizontal_Colour.svg"
              alt="BoAbCo logo"
              className="login-page__logo"
            />
            <h1 id="login-title" className="login-page__title">Sign in to BoAbCo</h1>
            <p className="login-page__subtitle">Enter your credentials to access the platform.</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-form__field">
              <span className="login-form__label">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
            <label className="login-form__field">
              <span className="login-form__label">Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
            </label>
            {error ? (
              <div className="login-form__error" role="alert">{error}</div>
            ) : null}
            <button
              type="submit"
              className="login-form__submit"
              disabled={status === 'authenticating'}
            >
              {status === 'authenticating' ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

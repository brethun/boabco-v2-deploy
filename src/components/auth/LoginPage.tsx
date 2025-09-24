import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEMO_CREDENTIALS, useSession } from './SessionProvider';
import './LoginPage.css';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const isDevEnvironment = process.env.NODE_ENV !== 'production';

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

  const handleAutofill = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError(null);
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
            <p className="login-page__subtitle">Use the demo credentials below to explore the platform.</p>
            <p className="login-page__hint">
              Demo email: <strong>{DEMO_CREDENTIALS.email}</strong>
              <br />
              Demo password: <strong>{DEMO_CREDENTIALS.password}</strong>
            </p>
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
                placeholder={DEMO_CREDENTIALS.email}
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
                placeholder="Enter the demo password"
                required
              />
            </label>
            {error ? (
              <div className="login-form__error" role="alert">{error}</div>
            ) : null}
            {isDevEnvironment ? (
              <button
                type="button"
                className="login-form__autofill"
                onClick={handleAutofill}
              >
                Autofill demo credentials
              </button>
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

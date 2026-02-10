import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => (
  <>
    <header>…</header>
    <main>
      <Outlet />  {/* <- É aqui que o Camaragibe, Home, etc. vão aparecer */}
    </main>
    <footer>…</footer>
  </>
);

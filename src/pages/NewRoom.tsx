import { Link } from 'react-router-dom';
//import { useAuth } from '../hooks/useAuth';

import illustration from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
  // const { sigInWithGoogle, user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt=" ilustração simbolizando perguntas e respostas"
        />

        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import illustration from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIcon from '../assets/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { sigInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    //valida se está logado se nao direciona para logar
    if (!user) {
      await sigInWithGoogle();
    }
    history.push('/rooms/new');
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

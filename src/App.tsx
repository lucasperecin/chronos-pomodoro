import { PlayCircleIcon } from "lucide-react";
import { Button } from "./components/Button";
import { Container } from "./components/Container"
import { Countdown } from "./components/Countdown";
import { Cycles } from "./components/Cycles";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu";

import './styles/global.css';
import './styles/theme.css';

export function App() {

  return (
    <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>

        <Container>
            <Countdown />
        </Container>

        <Container>
            <form className="form" action="">
            <div className="formRow">
            <Input id="meuInput" type="text" label="Task" placeholder="Digite sua tarefa" />
            </div>

            <div className="formRow">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>
                <Button icon={<PlayCircleIcon />} />
            </form>
        </Container>
    </>
  )
}

export default App

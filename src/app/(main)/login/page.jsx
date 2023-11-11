import "@/app/(main)/login/Login.css";

function Page() {
  return (
    <>
      <div className="main-doc">
        <div className="box-login">
          <h1 className="tituloLogin">CONTADOR DE GENTE</h1>
          <img
            src={"/MCK_invertido_branco-01.png"}
            className="logo logoMack"
            alt="Logo atech"
          />
          <h2>+</h2>
          <img
            src={"/atech-logo.png"}
            className="logo logoAtech"
            alt="Logo Mackenzie"
          />
          <div className="loginForm">
            <form name="login" method="post" action="">
              <input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="Usuário"
                required
              />
              <p></p>
              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Senha"
                pattern="[a-z0-5]{8,}"
              />
              <p></p>
              <input type="submit" value="ENTRAR" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

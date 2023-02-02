import "./Footer.css";
import logoHelmet from "../../assets/logo-helmet.png";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="container-footer flex flex-row justify-around">
        <div className="flex-initial w-48">
          <img src={logoHelmet} alt="" className="ml-auto mr-auto" />
          <span className="text-copyright mt-5">
            2022 <strong>@olamundodigital</strong> Todos os direitos
            reservaddos.
          </span>
        </div>
        <div className="flex-initial w-48">
          <h4>
            <strong>Serviços</strong>
          </h4>
          <ul className="list-disc pl-auto pr-auto">
            <li>Desenvolvimento Web</li>
            <li>Aplicativos Mobile</li>
            <li>UI UX Design</li>
            <li>Marketing e Comunicação</li>
          </ul>
        </div>
        <div className="flex-initial w-48">
          <h4>
            <strong>Contatos</strong>
          </h4>
          <p>(98) 98298-5106</p>
          <p>contato@olamundoestudio.com</p>
        </div>
        <div className="flex-initial w-48">
          <h4>
            <strong>Redes Sociais</strong>
          </h4>
          <div className="flex justify-evenly">
            <span>
              <BsInstagram color="white" />
            </span>
            <span>
              <BsWhatsapp color="white" />
            </span>
            <span>
              <BsLinkedin color="white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

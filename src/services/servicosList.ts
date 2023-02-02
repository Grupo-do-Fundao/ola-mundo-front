import devweb from '../assets/devweb.png'
import mobile from '../assets/mobile.png'
import design from '../assets/design.png'
import ads from '../assets/ads.png'

interface IServicos {
  color: string;
  title: string;
  text: string;
  img: string;
}

export const servicos: IServicos[] = [
  {
    color: "#F95610",
    text: "Sites e sistemas inteligentes para a sua empresa crescer de forma escalável.",
    title: "DESENVOLVIMENTO WEB",
    img: devweb,
  },
  {
    color: "#00E9B1",
    text: "Extenda os serviços e produtos do seu negócio a um toque de tela do seu cliente.",
    title: "APLICATIVOS MOBILE",
    img: mobile
  },
  {
    color: "#AA61F4",
    text: "Cada detalhe é pensado com o objetivo de encantar buscando a melhor experiência visual para o seu cliente.",
    title: "UI/UX DESIGN",
    img: design
  },
  {
    color: "#F04D94",
    text: "Campanhas personalizadas e constantes para manter a posição da sua marca no topo das buscas por seus serviços e produtos.",
    title: "GOOGLE Ads",
    img: ads
  }
];

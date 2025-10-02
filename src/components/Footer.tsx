import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo-dragao.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1: Logo + Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo Dragão Vermelho" className="w-12 h-12" />
              <h3 className="text-xl font-bold">Dragão Vermelho</h3>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Nos siga e acompanhe os bastidores, treinos e dicas:
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-foreground/10 p-2 rounded-full hover:bg-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-foreground/10 p-2 rounded-full hover:bg-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-foreground/10 p-2 rounded-full hover:bg-primary transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Formas de Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary">Fale com o Professor Cleiton</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-secondary-foreground">WhatsApp</p>
                  <a href="tel:+5511999999999" className="hover:text-primary transition-smooth">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-secondary-foreground">E-mail</p>
                  <a href="mailto:contato@dragaovermelho.com.br" className="hover:text-primary transition-smooth">
                    contato@dragaovermelho.com.br
                  </a>
                </div>
              </div>
              <p className="text-sm">
                💬 Resposta rápida das 8h às 22h
              </p>
            </div>
          </div>
          
          {/* Coluna 3: Horários das Aulas */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horários das Aulas
            </h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div>
                <p className="font-semibold text-secondary-foreground mb-2">🕐 Aulas em Grupo</p>
                <p className="text-sm">Segunda a Sexta: 07h • 12h • 19h</p>
                <p className="text-sm">Sábado: 10h (treino aberto)</p>
              </div>
              <div>
                <p className="font-semibold text-secondary-foreground mb-2">🎯 Aulas Personalizadas</p>
                <p className="text-sm">Agendadas de acordo com sua disponibilidade</p>
                <p className="text-sm">De segunda a sábado</p>
              </div>
            </div>
          </div>
          
          {/* Coluna 4: Onde Estamos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Onde Estamos
            </h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <p className="text-sm">
                <strong className="text-secondary-foreground">Rua Exemplo, 123</strong>
                <br />
                Bairro Central – Cidade/UF
              </p>
              <p className="text-sm">
                🚗 Fácil acesso • Estacionamento em frente
              </p>
              <div className="bg-secondary-foreground/10 p-3 rounded-lg mt-4">
                <p className="text-sm text-secondary-foreground mb-2">🗺️ Veja no mapa:</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-smooth text-sm font-semibold"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rodapé Legal */}
        <div className="border-t border-secondary-foreground/20 pt-6 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 Equipe Dragão Vermelho • Todos os direitos reservados
          </p>
          <p className="text-secondary-foreground/60 text-sm mt-1">
            Desenvolvido com 🥊 e dedicação por quem vive o Muay Thai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import upeaLogo from "../../assets/upea.jpeg"; 
const Footer = () => {
  
  return (
    <>
      {/* <footer className="footer bg-base-200 text-base-content p-10 border-base-300 border-t mt-8">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Noticias</a>
          <a className="link link-hover">Herramientas</a>
          <a className="link link-hover">Acerca de</a>
        </nav>
        <nav>
          <h6 className="footer-title">Equipo</h6>
          <a className="link link-hover">Sobre nosotros</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Trabajos</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Términos de uso</a>
          <a className="link link-hover">Política de privacidad</a>
        </nav>
      </footer> */}

      {/* Sección de la Universidad */}
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 ">
        <div className="flex justify-between w-full items-center" >
          <aside className="flex items-center">
            <div className="w-12 h-12 mr-3 rounded-full overflow-hidden border-2 border-gray-400">
              <img
                src={upeaLogo}
                alt="UPEA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Universidad Pública de El Alto
              <br />
              Proporcionando educación de calidad desde 1992
            </p>
          </aside>
          <p className="font-extralight text-slate-600" >coronelr.7660@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
